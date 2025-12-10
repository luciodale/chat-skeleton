import { useState, useEffect, useCallback } from "react";
import { Capacitor } from "@capacitor/core";
import type { NativeAuthResult, NativeAuthError } from "../types/native-auth";

type AuthState =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "authenticated"; auth: NativeAuthResult }
  | { status: "unauthenticated" }
  | { status: "error"; error: NativeAuthError };

export function useNativeAuth() {
  const isNative = Capacitor.isNativePlatform();
  const [state, setState] = useState<AuthState>(
    isNative ? { status: "loading" } : { status: "idle" }
  );

  useEffect(() => {
    if (!isNative) return;

    const checkAuth = async () => {
      try {
        const auth = await window.NativeAuth?.get();
        if (auth) {
          console.log("[NativeAuth] Token retrieved:", auth.token);
          setState({ status: "authenticated", auth });
        } else {
          console.log("[NativeAuth] No existing auth, triggering login...");
          const newAuth = await window.NativeAuth?.login();
          if (newAuth) {
            console.log("[NativeAuth] Login successful:", newAuth.token);
            setState({ status: "authenticated", auth: newAuth });
          } else {
            setState({ status: "unauthenticated" });
          }
        }
      } catch (e) {
        const error = e as NativeAuthError;
        console.error("[NativeAuth] Failed:", error);
        setState({ status: "error", error });
      }
    };

    checkAuth();
  }, [isNative]);

  const login = useCallback(async () => {
    if (!isNative || !window.NativeAuth) {
      console.warn("[NativeAuth] Not available on this platform");
      return null;
    }

    setState({ status: "loading" });

    try {
      const auth = await window.NativeAuth.login();
      console.log("[NativeAuth] Login successful, token:", auth.token);
      setState({ status: "authenticated", auth });
      return auth;
    } catch (e) {
      const error = e as NativeAuthError;
      if (error.code === "ERR_INVALID_CREDENTIALS") {
        console.warn("[NativeAuth] Invalid credentials");
      } else {
        console.error("[NativeAuth] Login failed:", error);
      }
      setState({ status: "error", error });
      return null;
    }
  }, [isNative]);

  const clear = useCallback(async () => {
    if (!isNative || !window.NativeAuth?.clear) {
      return;
    }

    try {
      await window.NativeAuth.clear();
      console.log("[NativeAuth] Auth cleared");
      setState({ status: "unauthenticated" });
    } catch (e) {
      console.error("[NativeAuth] Clear failed:", e);
    }
  }, [isNative]);

  return {
    isNative,
    state,
    login,
    clear,
    isLoading: state.status === "loading",
    isAuthenticated: state.status === "authenticated",
    token: state.status === "authenticated" ? state.auth.token : null,
    error: state.status === "error" ? state.error : null,
  };
}
