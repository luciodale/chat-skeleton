import { useState, useEffect, useCallback } from "react";
import { Capacitor, registerPlugin } from "@capacitor/core";
import type { User, AuthError, AuthPlugin } from "../types/native-auth";

const Auth = registerPlugin<AuthPlugin>("Auth");

type AuthState =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "authenticated"; user: User; token: string }
  | { status: "unauthenticated" }
  | { status: "error"; error: AuthError };

export function useNativeAuth() {
  const isNative = Capacitor.isNativePlatform();
  const [state, setState] = useState<AuthState>(
    isNative ? { status: "loading" } : { status: "idle" }
  );

  useEffect(() => {
    if (!isNative) return;

    const checkAuth = async () => {
      try {
        const { authenticated } = await Auth.isAuthenticated();

        if (authenticated) {
          const { user } = await Auth.getCurrentUser();
          if (user) {
            console.log("[Auth] User already authenticated:", user.email);
            setState({ status: "authenticated", user, token: "" });
          } else {
            setState({ status: "unauthenticated" });
          }
        } else {
          console.log("[Auth] Not authenticated, triggering login...");
          const result = await Auth.login();
          console.log("[Auth] Login successful:", result.user.email);
          setState({
            status: "authenticated",
            user: result.user,
            token: result.token,
          });
        }
      } catch (e) {
        const error = e as AuthError;
        console.error("[Auth] Failed:", error);
        setState({ status: "error", error });
      }
    };

    checkAuth();
  }, [isNative]);

  const login = useCallback(async () => {
    if (!isNative) {
      console.warn("[Auth] Not available on this platform");
      return null;
    }

    setState({ status: "loading" });

    try {
      const result = await Auth.login();
      console.log("[Auth] Login successful:", result.user.email);
      setState({
        status: "authenticated",
        user: result.user,
        token: result.token,
      });
      return result;
    } catch (e) {
      const error = e as AuthError;
      console.error("[Auth] Login failed:", error);
      setState({ status: "error", error });
      return null;
    }
  }, [isNative]);

  const logout = useCallback(async () => {
    if (!isNative) return;

    try {
      await Auth.logout();
      console.log("[Auth] Logged out");
      setState({ status: "unauthenticated" });
    } catch (e) {
      console.error("[Auth] Logout failed:", e);
    }
  }, [isNative]);

  return {
    isNative,
    state,
    login,
    logout,
    isLoading: state.status === "loading",
    isAuthenticated: state.status === "authenticated",
    user: state.status === "authenticated" ? state.user : null,
    token: state.status === "authenticated" ? state.token : null,
    error: state.status === "error" ? state.error : null,
  };
}
