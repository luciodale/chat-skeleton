import Foundation
import Capacitor

@objc(AuthPlugin)
public class AuthPlugin: CAPPlugin, CAPBridgedPlugin {
    public let identifier = "AuthPlugin"
    public let jsName = "Auth"
    public let pluginMethods: [CAPPluginMethod] = [
        CAPPluginMethod(name: "login", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "logout", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "getCurrentUser", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "isAuthenticated", returnType: CAPPluginReturnPromise),
    ]
    
    private var currentToken: String?
    private var currentUser: [String: Any]?
    
    @objc func login(_ call: CAPPluginCall) {
        // Mock login - simulates a successful authentication
        DispatchQueue.main.asyncAfter(deadline: .now() + 0.5) { [weak self] in
            guard let self = self else { return }
            
            self.currentToken = "mock-jwt-token-\(UUID().uuidString.prefix(8))"
            self.currentUser = [
                "id": "user-42",
                "email": "john@example.com",
                "name": "John Doe"
            ]
            
            let iso8601 = ISO8601DateFormatter()
            let expiresAt = Date().addingTimeInterval(3600)
            
            call.resolve([
                "token": self.currentToken!,
                "expiresAt": iso8601.string(from: expiresAt),
                "user": self.currentUser!
            ])
        }
    }
    
    @objc func logout(_ call: CAPPluginCall) {
        currentToken = nil
        currentUser = nil
        
        call.resolve([
            "success": true
        ])
    }
    
    @objc func getCurrentUser(_ call: CAPPluginCall) {
        guard let user = currentUser else {
            call.resolve([:])
            return
        }
        
        call.resolve(["user": user])
    }
    
    @objc func isAuthenticated(_ call: CAPPluginCall) {
        let authenticated = currentToken != nil && currentUser != nil
        call.resolve([
            "authenticated": authenticated
        ])
    }
}
