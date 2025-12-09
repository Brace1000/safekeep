import { z } from 'zod';
export declare const userPreferencesSchema: z.ZodObject<{
    notifications: z.ZodObject<{
        alerts: z.ZodBoolean;
        reports: z.ZodBoolean;
        system: z.ZodBoolean;
        marketing: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        system: boolean;
        alerts: boolean;
        reports: boolean;
        marketing: boolean;
    }, {
        system: boolean;
        alerts: boolean;
        reports: boolean;
        marketing: boolean;
    }>;
    privacy: z.ZodObject<{
        shareLocation: z.ZodBoolean;
        anonymousReporting: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        shareLocation: boolean;
        anonymousReporting: boolean;
    }, {
        shareLocation: boolean;
        anonymousReporting: boolean;
    }>;
    theme: z.ZodEnum<["light", "dark", "system"]>;
    language: z.ZodString;
}, "strip", z.ZodTypeAny, {
    notifications: {
        system: boolean;
        alerts: boolean;
        reports: boolean;
        marketing: boolean;
    };
    privacy: {
        shareLocation: boolean;
        anonymousReporting: boolean;
    };
    theme: "light" | "dark" | "system";
    language: string;
}, {
    notifications: {
        system: boolean;
        alerts: boolean;
        reports: boolean;
        marketing: boolean;
    };
    privacy: {
        shareLocation: boolean;
        anonymousReporting: boolean;
    };
    theme: "light" | "dark" | "system";
    language: string;
}>;
export declare const userSchema: z.ZodObject<{
    id: z.ZodString;
    email: z.ZodString;
    firstName: z.ZodString;
    lastName: z.ZodString;
    phoneNumber: z.ZodOptional<z.ZodString>;
    avatar: z.ZodOptional<z.ZodString>;
    isVerified: z.ZodBoolean;
    role: z.ZodEnum<["user", "moderator", "admin"]>;
    preferences: z.ZodObject<{
        notifications: z.ZodObject<{
            alerts: z.ZodBoolean;
            reports: z.ZodBoolean;
            system: z.ZodBoolean;
            marketing: z.ZodBoolean;
        }, "strip", z.ZodTypeAny, {
            system: boolean;
            alerts: boolean;
            reports: boolean;
            marketing: boolean;
        }, {
            system: boolean;
            alerts: boolean;
            reports: boolean;
            marketing: boolean;
        }>;
        privacy: z.ZodObject<{
            shareLocation: z.ZodBoolean;
            anonymousReporting: z.ZodBoolean;
        }, "strip", z.ZodTypeAny, {
            shareLocation: boolean;
            anonymousReporting: boolean;
        }, {
            shareLocation: boolean;
            anonymousReporting: boolean;
        }>;
        theme: z.ZodEnum<["light", "dark", "system"]>;
        language: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        notifications: {
            system: boolean;
            alerts: boolean;
            reports: boolean;
            marketing: boolean;
        };
        privacy: {
            shareLocation: boolean;
            anonymousReporting: boolean;
        };
        theme: "light" | "dark" | "system";
        language: string;
    }, {
        notifications: {
            system: boolean;
            alerts: boolean;
            reports: boolean;
            marketing: boolean;
        };
        privacy: {
            shareLocation: boolean;
            anonymousReporting: boolean;
        };
        theme: "light" | "dark" | "system";
        language: string;
    }>;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
    lastLoginAt: z.ZodOptional<z.ZodDate>;
}, "strip", z.ZodTypeAny, {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    isVerified: boolean;
    role: "user" | "moderator" | "admin";
    preferences: {
        notifications: {
            system: boolean;
            alerts: boolean;
            reports: boolean;
            marketing: boolean;
        };
        privacy: {
            shareLocation: boolean;
            anonymousReporting: boolean;
        };
        theme: "light" | "dark" | "system";
        language: string;
    };
    createdAt: Date;
    updatedAt: Date;
    phoneNumber?: string | undefined;
    avatar?: string | undefined;
    lastLoginAt?: Date | undefined;
}, {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    isVerified: boolean;
    role: "user" | "moderator" | "admin";
    preferences: {
        notifications: {
            system: boolean;
            alerts: boolean;
            reports: boolean;
            marketing: boolean;
        };
        privacy: {
            shareLocation: boolean;
            anonymousReporting: boolean;
        };
        theme: "light" | "dark" | "system";
        language: string;
    };
    createdAt: Date;
    updatedAt: Date;
    phoneNumber?: string | undefined;
    avatar?: string | undefined;
    lastLoginAt?: Date | undefined;
}>;
export declare const loginCredentialsSchema: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    password: string;
    email: string;
}, {
    password: string;
    email: string;
}>;
export declare const signupDataSchema: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
    firstName: z.ZodString;
    lastName: z.ZodString;
    phoneNumber: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    password: string;
    email: string;
    firstName: string;
    lastName: string;
    phoneNumber?: string | undefined;
}, {
    password: string;
    email: string;
    firstName: string;
    lastName: string;
    phoneNumber?: string | undefined;
}>;
export declare const updateProfileSchema: z.ZodObject<{
    firstName: z.ZodOptional<z.ZodString>;
    lastName: z.ZodOptional<z.ZodString>;
    phoneNumber: z.ZodOptional<z.ZodString>;
    avatar: z.ZodOptional<z.ZodString>;
    preferences: z.ZodOptional<z.ZodObject<{
        notifications: z.ZodOptional<z.ZodObject<{
            alerts: z.ZodBoolean;
            reports: z.ZodBoolean;
            system: z.ZodBoolean;
            marketing: z.ZodBoolean;
        }, "strip", z.ZodTypeAny, {
            system: boolean;
            alerts: boolean;
            reports: boolean;
            marketing: boolean;
        }, {
            system: boolean;
            alerts: boolean;
            reports: boolean;
            marketing: boolean;
        }>>;
        privacy: z.ZodOptional<z.ZodObject<{
            shareLocation: z.ZodBoolean;
            anonymousReporting: z.ZodBoolean;
        }, "strip", z.ZodTypeAny, {
            shareLocation: boolean;
            anonymousReporting: boolean;
        }, {
            shareLocation: boolean;
            anonymousReporting: boolean;
        }>>;
        theme: z.ZodOptional<z.ZodEnum<["light", "dark", "system"]>>;
        language: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        notifications?: {
            system: boolean;
            alerts: boolean;
            reports: boolean;
            marketing: boolean;
        } | undefined;
        privacy?: {
            shareLocation: boolean;
            anonymousReporting: boolean;
        } | undefined;
        theme?: "light" | "dark" | "system" | undefined;
        language?: string | undefined;
    }, {
        notifications?: {
            system: boolean;
            alerts: boolean;
            reports: boolean;
            marketing: boolean;
        } | undefined;
        privacy?: {
            shareLocation: boolean;
            anonymousReporting: boolean;
        } | undefined;
        theme?: "light" | "dark" | "system" | undefined;
        language?: string | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    firstName?: string | undefined;
    lastName?: string | undefined;
    phoneNumber?: string | undefined;
    avatar?: string | undefined;
    preferences?: {
        notifications?: {
            system: boolean;
            alerts: boolean;
            reports: boolean;
            marketing: boolean;
        } | undefined;
        privacy?: {
            shareLocation: boolean;
            anonymousReporting: boolean;
        } | undefined;
        theme?: "light" | "dark" | "system" | undefined;
        language?: string | undefined;
    } | undefined;
}, {
    firstName?: string | undefined;
    lastName?: string | undefined;
    phoneNumber?: string | undefined;
    avatar?: string | undefined;
    preferences?: {
        notifications?: {
            system: boolean;
            alerts: boolean;
            reports: boolean;
            marketing: boolean;
        } | undefined;
        privacy?: {
            shareLocation: boolean;
            anonymousReporting: boolean;
        } | undefined;
        theme?: "light" | "dark" | "system" | undefined;
        language?: string | undefined;
    } | undefined;
}>;
export type UserPreferences = z.infer<typeof userPreferencesSchema>;
export type User = z.infer<typeof userSchema>;
export type LoginCredentials = z.infer<typeof loginCredentialsSchema>;
export type SignupData = z.infer<typeof signupDataSchema>;
export type UpdateProfileData = z.infer<typeof updateProfileSchema>;
//# sourceMappingURL=user.d.ts.map