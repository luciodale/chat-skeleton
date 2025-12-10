import Foundation
import WebKit
import ObjectiveC
import os

private let webAuthLogger = Logger(subsystem: Bundle.main.bundleIdentifier ?? "App", category: "NativeAuthWebBridge")

/// A battle-tested web bridge that exposes NativeAuth to JavaScript running in a WKWebView.
/// - Provides awaitable JS APIs via Promises with correlation IDs and timeouts.
/// - Safely serializes payloads and maps errors to stable codes.
/// - Injects the JS shim at document start and (optionally) into the current page.
@MainActor
final class NativeAuthWebBridge: NSObject, WKScriptMessageHandler {
    private weak var webView: WKWebView?
    private let iso8601 = ISO8601DateFormatter()

    init(webView: WKWebView) {
        self.webView = webView
        super.init()
        install()
    }

    private func install() {
        guard let webView else { return }
        webAuthLogger.info("NativeAuthWebBridge.install()")

        let controller = webView.configuration.userContentController

        // Ensure we don't have a stale handler with the same name
        controller.removeScriptMessageHandler(forName: "nativeAuth")
        controller.add(self, name: "nativeAuth")
        webAuthLogger.debug("Registered WKScriptMessageHandler nativeAuth")

        // Inject the JS wrapper at document start so window.NativeAuth is always available.
        let script = WKUserScript(
            source: NativeAuthJS.bootstrapScript,
            injectionTime: .atDocumentStart,
            forMainFrameOnly: true
        )
        controller.addUserScript(script)
        webAuthLogger.debug("Added bootstrap user script at document start")

        // Also inject immediately for already-loaded content (no-op if it already exists).
        webView.evaluateJavaScript(NativeAuthJS.bootstrapScript, completionHandler: nil)
        webAuthLogger.debug("Injected bootstrap script into current page")
    }

    // MARK: - WKScriptMessageHandler
    func userContentController(_ userContentController: WKUserContentController, didReceive message: WKScriptMessage) {
        guard message.name == "nativeAuth",
              let body = message.body as? [String: Any],
              let id = body["id"] as? String,
              let action = body["action"] as? String else {
            return
        }
        webAuthLogger.debug("Received nativeAuth message action=\(action, privacy: .public) id=\(id, privacy: .public)")

        func resolve(_ payload: Any) {
            evaluateJS("window.NativeAuth._resolve", id: id, payload: payload)
        }

        func reject(code: String, message: String) {
            let errorPayload: [String: Any] = ["code": code, "message": message]
            evaluateJS("window.NativeAuth._reject", id: id, payload: errorPayload)
        }

        switch action {
        case "login":
            webAuthLogger.info("Handling login request")

            Task {
                do {
                    let response = try await NativeAuthBridge.nativeLogin()
                    let payload: [String: Any] = [
                        "token": response.token,
                        "userID": response.userID,
                        "expiresAt": iso8601.string(from: response.expiresAt)
                    ]
                    webAuthLogger.info("Login success (payload prepared)")
                    resolve(payload)
                } catch {
                    webAuthLogger.error("Login failed")
                    reject(code: "ERR_LOGIN", message: "Login failed")
                }
            }

        case "get":
            webAuthLogger.info("Handling get request")
            let hasAuth = (NativeAuthBridge.getNativeAuth() != nil)
            webAuthLogger.debug("get request hasAuth=\(hasAuth, privacy: .public)")
            if let current = NativeAuthBridge.getNativeAuth() {
                let payload: [String: Any] = [
                    "token": current.token,
                    "userID": current.userID,
                    "expiresAt": iso8601.string(from: current.expiresAt)
                ]
                resolve(payload)
            } else {
                resolveNull(id: id)
            }

        case "clear":
            webAuthLogger.info("Handling clear request")
            NativeAuthBridge.clearNativeAuth()
            resolve(["ok": true])

        default:
            webAuthLogger.warning("Unknown action: \(action, privacy: .public)")
            reject(code: "ERR_UNKNOWN_ACTION", message: "Unknown action '\(action)'.")
        }
    }

    // MARK: - Helpers
    private func resolveNull(id: String) {
        guard let webView else { return }
        webAuthLogger.debug("Resolving null for id=\(id, privacy: .public)")
        webView.evaluateJavaScript("window.NativeAuth._resolve('\(escapeForJS(id))', null);", completionHandler: nil)
    }

    private func evaluateJS(_ fnName: String, id: String, payload: Any) {
        webAuthLogger.debug("Evaluating JS call \(fnName, privacy: .public) for id=\(id, privacy: .public)")
        guard let webView else { return }
        let json: String
        do {
            let data = try JSONSerialization.data(withJSONObject: payload, options: [])
            json = String(data: data, encoding: .utf8) ?? "null"
        } catch {
            let errorPayload: [String: Any] = ["code": "ERR_SERIALIZATION", "message": "Failed to serialize response."]
            if let data = try? JSONSerialization.data(withJSONObject: errorPayload, options: []),
               let json = String(data: data, encoding: .utf8) {
                webView.evaluateJavaScript("\(fnName)('\(escapeForJS(id))', \(json));", completionHandler: nil)
            }
            return
        }
        webView.evaluateJavaScript("\(fnName)('\(escapeForJS(id))', \(json));", completionHandler: nil)
    }

    private func escapeForJS(_ s: String) -> String {
        s
            .replacingOccurrences(of: "\\", with: "\\\\")
            .replacingOccurrences(of: "'", with: "\\'")
            .replacingOccurrences(of: "\n", with: "\\n")
            .replacingOccurrences(of: "\r", with: "\\r")
    }
}

// Convenience: install and retain the bridge on a WKWebView via associated objects.
private var _nativeAuthBridgeKey: UInt8 = 0

public extension WKWebView {
    /// Installs the NativeAuth web bridge and retains it for the lifetime of this web view.
    public func installNativeAuthBridge() {
        if objc_getAssociatedObject(self, &_nativeAuthBridgeKey) != nil {
            return // already installed
        }
        let bridge = NativeAuthWebBridge(webView: self)
        objc_setAssociatedObject(self, &_nativeAuthBridgeKey, bridge, .OBJC_ASSOCIATION_RETAIN_NONATOMIC)
    }
}

enum NativeAuthJS {
    // Promise-based RPC with correlation IDs and a timeout, exposed as window.NativeAuth
    static let bootstrapScript = """
    (function() {
      if (window.NativeAuth) { return; }

      const pending = new Map();
      const TIMEOUT_MS = 15000;

      function uuid() {
        try {
          return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
            (c ^ (window.crypto.getRandomValues(new Uint8Array(1))[0] & 15) >> (c / 4)).toString(16)
          );
        } catch (e) {
          // Fallback if crypto is unavailable
          return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
          });
        }
      }

      function callNative(action, params = {}) {
        const id = uuid();
        const msg = { id, action, ...params };
        return new Promise((resolve, reject) => {
          const timeout = setTimeout(() => {
            pending.delete(id);
            reject(new Error('Native call timed out'));
          }, TIMEOUT_MS);

          pending.set(id, { resolve, reject, timeout });
          try {
            window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.nativeAuth &&
              window.webkit.messageHandlers.nativeAuth.postMessage(msg);
          } catch (e) {
            clearTimeout(timeout);
            pending.delete(id);
            reject(new Error('Native bridge unavailable'));
          }
        });
      }

      window.NativeAuth = {
        // Public API (awaitable)
        login() { return callNative('login'); },
        get() { return callNative('get'); },
        clear() { return callNative('clear'); },

        // Resolution from native
        _resolve(id, payload) {
          const p = pending.get(id);
          if (!p) return;
          clearTimeout(p.timeout);
          pending.delete(id);
          p.resolve(payload);
        },
        _reject(id, error) {
          const p = pending.get(id);
          if (!p) return;
          clearTimeout(p.timeout);
          pending.delete(id);
          const message = (error && (error.message || error)) || 'Native error';
          const err = new Error(String(message));
          if (error && error.code) err.code = error.code;
          p.reject(err);
        }
      };
    })();
    """
}
