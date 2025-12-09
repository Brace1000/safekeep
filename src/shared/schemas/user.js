"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProfileSchema = exports.signupDataSchema = exports.loginCredentialsSchema = exports.userSchema = exports.userPreferencesSchema = void 0;
const zod_1 = require("zod");
// Base user schema
exports.userPreferencesSchema = zod_1.z.object({
    notifications: zod_1.z.object({
        alerts: zod_1.z.boolean(),
        reports: zod_1.z.boolean(),
        system: zod_1.z.boolean(),
        marketing: zod_1.z.boolean(),
    }),
    privacy: zod_1.z.object({
        shareLocation: zod_1.z.boolean(),
        anonymousReporting: zod_1.z.boolean(),
    }),
    theme: zod_1.z.enum(['light', 'dark', 'system']),
    language: zod_1.z.string().min(2).max(10),
});
exports.userSchema = zod_1.z.object({
    id: zod_1.z.string().uuid(),
    email: zod_1.z.string().email(),
    firstName: zod_1.z.string().min(1).max(50),
    lastName: zod_1.z.string().min(1).max(50),
    phoneNumber: zod_1.z.string().optional(),
    avatar: zod_1.z.string().url().optional(),
    isVerified: zod_1.z.boolean(),
    role: zod_1.z.enum(['user', 'moderator', 'admin']),
    preferences: exports.userPreferencesSchema,
    createdAt: zod_1.z.date(),
    updatedAt: zod_1.z.date(),
    lastLoginAt: zod_1.z.date().optional(),
});
// Auth schemas
exports.loginCredentialsSchema = zod_1.z.object({
    email: zod_1.z.string().email(),
    password: zod_1.z.string().min(8),
});
exports.signupDataSchema = zod_1.z.object({
    email: zod_1.z.string().email(),
    password: zod_1.z.string().min(8).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/, 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'),
    firstName: zod_1.z.string().min(1).max(50),
    lastName: zod_1.z.string().min(1).max(50),
    phoneNumber: zod_1.z.string().optional(),
});
exports.updateProfileSchema = zod_1.z.object({
    firstName: zod_1.z.string().min(1).max(50).optional(),
    lastName: zod_1.z.string().min(1).max(50).optional(),
    phoneNumber: zod_1.z.string().optional(),
    avatar: zod_1.z.string().url().optional(),
    preferences: exports.userPreferencesSchema.partial().optional(),
});
//# sourceMappingURL=user.js.map