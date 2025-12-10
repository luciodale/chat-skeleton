import Foundation

public struct AuthResponse {
    public let token: String
    public let userID: String
    public let expiresAt: Date
}

public enum NativeAuthBridge {
    private static var currentAuth: AuthResponse?

    public static func nativeLogin() async throws -> AuthResponse {
        // Simulate network delay
        try await Task.sleep(nanoseconds: 1_000_000_000)
        
        let response = AuthResponse(
            token: "mock-jwt-token-12345",
            userID: "user-42",
            expiresAt: Date().addingTimeInterval(3600)
        )
        currentAuth = response
        return response
    }

    public static func getNativeAuth() -> AuthResponse? {
        return currentAuth
    }

    public static func clearNativeAuth() {
        currentAuth = nil
    }
}
