"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.incidentSearchFiltersSchema = exports.incidentReportSchema = exports.mediaFileSchema = exports.incidentSchema = void 0;
const zod_1 = require("zod");
const coordinatesSchema = zod_1.z.object({
    latitude: zod_1.z.number().min(-90).max(90),
    longitude: zod_1.z.number().min(-180).max(180),
});
const incidentMetadataSchema = zod_1.z.object({
    witnessCount: zod_1.z.number().int().min(0).optional(),
    policeReportFiled: zod_1.z.boolean().optional(),
    policeReportNumber: zod_1.z.string().optional(),
    estimatedDamage: zod_1.z.string().optional(),
    injuredParties: zod_1.z.number().int().min(0).optional(),
    timeOfIncident: zod_1.z.date().optional(),
    weatherConditions: zod_1.z.string().optional(),
    lightingConditions: zod_1.z.enum(['daylight', 'dusk', 'night', 'poor']).optional(),
    crowdDensity: zod_1.z.enum(['empty', 'sparse', 'moderate', 'crowded']).optional(),
});
exports.incidentSchema = zod_1.z.object({
    id: zod_1.z.string().uuid(),
    reporterId: zod_1.z.string(),
    type: zod_1.z.enum([
        'theft',
        'assault',
        'accident',
        'harassment',
        'suspicious_activity',
        'medical_emergency',
        'fire',
        'other'
    ]),
    severity: zod_1.z.enum(['low', 'medium', 'high', 'critical']),
    title: zod_1.z.string().min(5).max(100),
    description: zod_1.z.string().min(10).max(1000),
    location: coordinatesSchema,
    address: zod_1.z.string().optional(),
    status: zod_1.z.enum([
        'pending_review',
        'under_review',
        'verified',
        'rejected',
        'resolved',
        'archived'
    ]),
    isAnonymous: zod_1.z.boolean(),
    mediaUrls: zod_1.z.array(zod_1.z.string().url()),
    tags: zod_1.z.array(zod_1.z.string()),
    metadata: incidentMetadataSchema,
    createdAt: zod_1.z.date(),
    updatedAt: zod_1.z.date(),
    resolvedAt: zod_1.z.date().optional(),
});
exports.mediaFileSchema = zod_1.z.object({
    uri: zod_1.z.string(),
    name: zod_1.z.string(),
    type: zod_1.z.string(),
    size: zod_1.z.number().int().positive(),
});
exports.incidentReportSchema = zod_1.z.object({
    type: zod_1.z.enum([
        'theft',
        'assault',
        'accident',
        'harassment',
        'suspicious_activity',
        'medical_emergency',
        'fire',
        'other'
    ]),
    severity: zod_1.z.enum(['low', 'medium', 'high', 'critical']),
    title: zod_1.z.string().min(5).max(100),
    description: zod_1.z.string().min(10).max(1000),
    location: coordinatesSchema,
    address: zod_1.z.string().optional(),
    isAnonymous: zod_1.z.boolean(),
    mediaFiles: zod_1.z.array(exports.mediaFileSchema).optional(),
    tags: zod_1.z.array(zod_1.z.string()).optional(),
    metadata: incidentMetadataSchema.partial().optional(),
});
exports.incidentSearchFiltersSchema = zod_1.z.object({
    type: zod_1.z.array(zod_1.z.enum([
        'theft',
        'assault',
        'accident',
        'harassment',
        'suspicious_activity',
        'medical_emergency',
        'fire',
        'other'
    ])).optional(),
    severity: zod_1.z.array(zod_1.z.enum(['low', 'medium', 'high', 'critical'])).optional(),
    status: zod_1.z.array(zod_1.z.enum([
        'pending_review',
        'under_review',
        'verified',
        'rejected',
        'resolved',
        'archived'
    ])).optional(),
    dateRange: zod_1.z.object({
        start: zod_1.z.date(),
        end: zod_1.z.date(),
    }).optional(),
    locationBounds: zod_1.z.object({
        northeast: coordinatesSchema,
        southwest: coordinatesSchema,
    }).optional(),
    radius: zod_1.z.object({
        center: coordinatesSchema,
        radius: zod_1.z.number().positive(),
    }).optional(),
    reporterId: zod_1.z.string().optional(),
    tags: zod_1.z.array(zod_1.z.string()).optional(),
});
//# sourceMappingURL=incident.js.map