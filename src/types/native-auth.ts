export type User = {
  id: string;
  email: string;
  name: string;
};

export type LoginResult = {
  token: string;
  expiresAt: string;
  user: User;
};

export type LogoutResult = {
  success: boolean;
};

export type GetCurrentUserResult = {
  user?: User;
};

export type IsAuthenticatedResult = {
  authenticated: boolean;
};

export type AuthError = {
  code: string;
  message?: string;
};

export type AuthPlugin = {
  login: () => Promise<LoginResult>;
  logout: () => Promise<LogoutResult>;
  getCurrentUser: () => Promise<GetCurrentUserResult>;
  isAuthenticated: () => Promise<IsAuthenticatedResult>;
};
