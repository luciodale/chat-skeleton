export interface NativeAuthResult {
  token: string;
  userID: string;
  expiresAt: string; // ISO8601 date string
}

export interface NativeAuthError {
  code: string;
  message?: string;
}

export interface NativeAuth {
  get: () => Promise<NativeAuthResult | null>;
  login: () => Promise<NativeAuthResult>;
  clear: () => Promise<{ ok: boolean }>;
}

declare global {
  interface Window {
    NativeAuth?: NativeAuth;
  }
}
