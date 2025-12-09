export interface User {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    phoneNumber?: string;
    avatar?: string;
    isVerified: boolean;
    role: UserRole;
    preferences: UserPreferences;
    createdAt: Date;
    updatedAt: Date;
    lastLoginAt?: Date;
}
export type UserRole = 'user' | 'moderator' | 'admin';
export interface UserPreferences {
    notifications: {
        alerts: boolean;
        reports: boolean;
        system: boolean;
        marketing: boolean;
    };
    privacy: {
        shareLocation: boolean;
        anonymousReporting: boolean;
    };
    theme: 'light' | 'dark' | 'system';
    language: string;
}
export interface AuthTokens {
    accessToken: string;
    refreshToken: string;
    expiresIn: number;
}
export interface LoginCredentials {
    email: string;
    password: string;
}
export interface SignupData {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    phoneNumber?: string;
}
export interface UserProfile extends Omit<User, 'password'> {
}
//# sourceMappingURL=user.d.ts.map