import { z } from 'zod';
export declare const incidentSchema: z.ZodObject<{
    id: z.ZodString;
    reporterId: z.ZodString;
    type: z.ZodEnum<["theft", "assault", "accident", "harassment", "suspicious_activity", "medical_emergency", "fire", "other"]>;
    severity: z.ZodEnum<["low", "medium", "high", "critical"]>;
    title: z.ZodString;
    description: z.ZodString;
    location: z.ZodObject<{
        latitude: z.ZodNumber;
        longitude: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        latitude: number;
        longitude: number;
    }, {
        latitude: number;
        longitude: number;
    }>;
    address: z.ZodOptional<z.ZodString>;
    status: z.ZodEnum<["pending_review", "under_review", "verified", "rejected", "resolved", "archived"]>;
    isAnonymous: z.ZodBoolean;
    mediaUrls: z.ZodArray<z.ZodString, "many">;
    tags: z.ZodArray<z.ZodString, "many">;
    metadata: z.ZodObject<{
        witnessCount: z.ZodOptional<z.ZodNumber>;
        policeReportFiled: z.ZodOptional<z.ZodBoolean>;
        policeReportNumber: z.ZodOptional<z.ZodString>;
        estimatedDamage: z.ZodOptional<z.ZodString>;
        injuredParties: z.ZodOptional<z.ZodNumber>;
        timeOfIncident: z.ZodOptional<z.ZodDate>;
        weatherConditions: z.ZodOptional<z.ZodString>;
        lightingConditions: z.ZodOptional<z.ZodEnum<["daylight", "dusk", "night", "poor"]>>;
        crowdDensity: z.ZodOptional<z.ZodEnum<["empty", "sparse", "moderate", "crowded"]>>;
    }, "strip", z.ZodTypeAny, {
        witnessCount?: number | undefined;
        policeReportFiled?: boolean | undefined;
        policeReportNumber?: string | undefined;
        estimatedDamage?: string | undefined;
        injuredParties?: number | undefined;
        timeOfIncident?: Date | undefined;
        weatherConditions?: string | undefined;
        lightingConditions?: "daylight" | "dusk" | "night" | "poor" | undefined;
        crowdDensity?: "empty" | "sparse" | "moderate" | "crowded" | undefined;
    }, {
        witnessCount?: number | undefined;
        policeReportFiled?: boolean | undefined;
        policeReportNumber?: string | undefined;
        estimatedDamage?: string | undefined;
        injuredParties?: number | undefined;
        timeOfIncident?: Date | undefined;
        weatherConditions?: string | undefined;
        lightingConditions?: "daylight" | "dusk" | "night" | "poor" | undefined;
        crowdDensity?: "empty" | "sparse" | "moderate" | "crowded" | undefined;
    }>;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
    resolvedAt: z.ZodOptional<z.ZodDate>;
}, "strip", z.ZodTypeAny, {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    type: "theft" | "assault" | "accident" | "harassment" | "suspicious_activity" | "medical_emergency" | "fire" | "other";
    status: "pending_review" | "under_review" | "verified" | "rejected" | "resolved" | "archived";
    location: {
        latitude: number;
        longitude: number;
    };
    severity: "low" | "medium" | "high" | "critical";
    metadata: {
        witnessCount?: number | undefined;
        policeReportFiled?: boolean | undefined;
        policeReportNumber?: string | undefined;
        estimatedDamage?: string | undefined;
        injuredParties?: number | undefined;
        timeOfIncident?: Date | undefined;
        weatherConditions?: string | undefined;
        lightingConditions?: "daylight" | "dusk" | "night" | "poor" | undefined;
        crowdDensity?: "empty" | "sparse" | "moderate" | "crowded" | undefined;
    };
    reporterId: string;
    title: string;
    description: string;
    isAnonymous: boolean;
    mediaUrls: string[];
    tags: string[];
    address?: string | undefined;
    resolvedAt?: Date | undefined;
}, {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    type: "theft" | "assault" | "accident" | "harassment" | "suspicious_activity" | "medical_emergency" | "fire" | "other";
    status: "pending_review" | "under_review" | "verified" | "rejected" | "resolved" | "archived";
    location: {
        latitude: number;
        longitude: number;
    };
    severity: "low" | "medium" | "high" | "critical";
    metadata: {
        witnessCount?: number | undefined;
        policeReportFiled?: boolean | undefined;
        policeReportNumber?: string | undefined;
        estimatedDamage?: string | undefined;
        injuredParties?: number | undefined;
        timeOfIncident?: Date | undefined;
        weatherConditions?: string | undefined;
        lightingConditions?: "daylight" | "dusk" | "night" | "poor" | undefined;
        crowdDensity?: "empty" | "sparse" | "moderate" | "crowded" | undefined;
    };
    reporterId: string;
    title: string;
    description: string;
    isAnonymous: boolean;
    mediaUrls: string[];
    tags: string[];
    address?: string | undefined;
    resolvedAt?: Date | undefined;
}>;
export declare const mediaFileSchema: z.ZodObject<{
    uri: z.ZodString;
    name: z.ZodString;
    type: z.ZodString;
    size: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    type: string;
    uri: string;
    name: string;
    size: number;
}, {
    type: string;
    uri: string;
    name: string;
    size: number;
}>;
export declare const incidentReportSchema: z.ZodObject<{
    type: z.ZodEnum<["theft", "assault", "accident", "harassment", "suspicious_activity", "medical_emergency", "fire", "other"]>;
    severity: z.ZodEnum<["low", "medium", "high", "critical"]>;
    title: z.ZodString;
    description: z.ZodString;
    location: z.ZodObject<{
        latitude: z.ZodNumber;
        longitude: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        latitude: number;
        longitude: number;
    }, {
        latitude: number;
        longitude: number;
    }>;
    address: z.ZodOptional<z.ZodString>;
    isAnonymous: z.ZodBoolean;
    mediaFiles: z.ZodOptional<z.ZodArray<z.ZodObject<{
        uri: z.ZodString;
        name: z.ZodString;
        type: z.ZodString;
        size: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        type: string;
        uri: string;
        name: string;
        size: number;
    }, {
        type: string;
        uri: string;
        name: string;
        size: number;
    }>, "many">>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    metadata: z.ZodOptional<z.ZodObject<{
        witnessCount: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
        policeReportFiled: z.ZodOptional<z.ZodOptional<z.ZodBoolean>>;
        policeReportNumber: z.ZodOptional<z.ZodOptional<z.ZodString>>;
        estimatedDamage: z.ZodOptional<z.ZodOptional<z.ZodString>>;
        injuredParties: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
        timeOfIncident: z.ZodOptional<z.ZodOptional<z.ZodDate>>;
        weatherConditions: z.ZodOptional<z.ZodOptional<z.ZodString>>;
        lightingConditions: z.ZodOptional<z.ZodOptional<z.ZodEnum<["daylight", "dusk", "night", "poor"]>>>;
        crowdDensity: z.ZodOptional<z.ZodOptional<z.ZodEnum<["empty", "sparse", "moderate", "crowded"]>>>;
    }, "strip", z.ZodTypeAny, {
        witnessCount?: number | undefined;
        policeReportFiled?: boolean | undefined;
        policeReportNumber?: string | undefined;
        estimatedDamage?: string | undefined;
        injuredParties?: number | undefined;
        timeOfIncident?: Date | undefined;
        weatherConditions?: string | undefined;
        lightingConditions?: "daylight" | "dusk" | "night" | "poor" | undefined;
        crowdDensity?: "empty" | "sparse" | "moderate" | "crowded" | undefined;
    }, {
        witnessCount?: number | undefined;
        policeReportFiled?: boolean | undefined;
        policeReportNumber?: string | undefined;
        estimatedDamage?: string | undefined;
        injuredParties?: number | undefined;
        timeOfIncident?: Date | undefined;
        weatherConditions?: string | undefined;
        lightingConditions?: "daylight" | "dusk" | "night" | "poor" | undefined;
        crowdDensity?: "empty" | "sparse" | "moderate" | "crowded" | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    type: "theft" | "assault" | "accident" | "harassment" | "suspicious_activity" | "medical_emergency" | "fire" | "other";
    location: {
        latitude: number;
        longitude: number;
    };
    severity: "low" | "medium" | "high" | "critical";
    title: string;
    description: string;
    isAnonymous: boolean;
    metadata?: {
        witnessCount?: number | undefined;
        policeReportFiled?: boolean | undefined;
        policeReportNumber?: string | undefined;
        estimatedDamage?: string | undefined;
        injuredParties?: number | undefined;
        timeOfIncident?: Date | undefined;
        weatherConditions?: string | undefined;
        lightingConditions?: "daylight" | "dusk" | "night" | "poor" | undefined;
        crowdDensity?: "empty" | "sparse" | "moderate" | "crowded" | undefined;
    } | undefined;
    address?: string | undefined;
    tags?: string[] | undefined;
    mediaFiles?: {
        type: string;
        uri: string;
        name: string;
        size: number;
    }[] | undefined;
}, {
    type: "theft" | "assault" | "accident" | "harassment" | "suspicious_activity" | "medical_emergency" | "fire" | "other";
    location: {
        latitude: number;
        longitude: number;
    };
    severity: "low" | "medium" | "high" | "critical";
    title: string;
    description: string;
    isAnonymous: boolean;
    metadata?: {
        witnessCount?: number | undefined;
        policeReportFiled?: boolean | undefined;
        policeReportNumber?: string | undefined;
        estimatedDamage?: string | undefined;
        injuredParties?: number | undefined;
        timeOfIncident?: Date | undefined;
        weatherConditions?: string | undefined;
        lightingConditions?: "daylight" | "dusk" | "night" | "poor" | undefined;
        crowdDensity?: "empty" | "sparse" | "moderate" | "crowded" | undefined;
    } | undefined;
    address?: string | undefined;
    tags?: string[] | undefined;
    mediaFiles?: {
        type: string;
        uri: string;
        name: string;
        size: number;
    }[] | undefined;
}>;
export declare const incidentSearchFiltersSchema: z.ZodObject<{
    type: z.ZodOptional<z.ZodArray<z.ZodEnum<["theft", "assault", "accident", "harassment", "suspicious_activity", "medical_emergency", "fire", "other"]>, "many">>;
    severity: z.ZodOptional<z.ZodArray<z.ZodEnum<["low", "medium", "high", "critical"]>, "many">>;
    status: z.ZodOptional<z.ZodArray<z.ZodEnum<["pending_review", "under_review", "verified", "rejected", "resolved", "archived"]>, "many">>;
    dateRange: z.ZodOptional<z.ZodObject<{
        start: z.ZodDate;
        end: z.ZodDate;
    }, "strip", z.ZodTypeAny, {
        start: Date;
        end: Date;
    }, {
        start: Date;
        end: Date;
    }>>;
    locationBounds: z.ZodOptional<z.ZodObject<{
        northeast: z.ZodObject<{
            latitude: z.ZodNumber;
            longitude: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            latitude: number;
            longitude: number;
        }, {
            latitude: number;
            longitude: number;
        }>;
        southwest: z.ZodObject<{
            latitude: z.ZodNumber;
            longitude: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            latitude: number;
            longitude: number;
        }, {
            latitude: number;
            longitude: number;
        }>;
    }, "strip", z.ZodTypeAny, {
        northeast: {
            latitude: number;
            longitude: number;
        };
        southwest: {
            latitude: number;
            longitude: number;
        };
    }, {
        northeast: {
            latitude: number;
            longitude: number;
        };
        southwest: {
            latitude: number;
            longitude: number;
        };
    }>>;
    radius: z.ZodOptional<z.ZodObject<{
        center: z.ZodObject<{
            latitude: z.ZodNumber;
            longitude: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            latitude: number;
            longitude: number;
        }, {
            latitude: number;
            longitude: number;
        }>;
        radius: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        center: {
            latitude: number;
            longitude: number;
        };
        radius: number;
    }, {
        center: {
            latitude: number;
            longitude: number;
        };
        radius: number;
    }>>;
    reporterId: z.ZodOptional<z.ZodString>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
}, "strip", z.ZodTypeAny, {
    type?: ("theft" | "assault" | "accident" | "harassment" | "suspicious_activity" | "medical_emergency" | "fire" | "other")[] | undefined;
    status?: ("pending_review" | "under_review" | "verified" | "rejected" | "resolved" | "archived")[] | undefined;
    severity?: ("low" | "medium" | "high" | "critical")[] | undefined;
    reporterId?: string | undefined;
    tags?: string[] | undefined;
    dateRange?: {
        start: Date;
        end: Date;
    } | undefined;
    locationBounds?: {
        northeast: {
            latitude: number;
            longitude: number;
        };
        southwest: {
            latitude: number;
            longitude: number;
        };
    } | undefined;
    radius?: {
        center: {
            latitude: number;
            longitude: number;
        };
        radius: number;
    } | undefined;
}, {
    type?: ("theft" | "assault" | "accident" | "harassment" | "suspicious_activity" | "medical_emergency" | "fire" | "other")[] | undefined;
    status?: ("pending_review" | "under_review" | "verified" | "rejected" | "resolved" | "archived")[] | undefined;
    severity?: ("low" | "medium" | "high" | "critical")[] | undefined;
    reporterId?: string | undefined;
    tags?: string[] | undefined;
    dateRange?: {
        start: Date;
        end: Date;
    } | undefined;
    locationBounds?: {
        northeast: {
            latitude: number;
            longitude: number;
        };
        southwest: {
            latitude: number;
            longitude: number;
        };
    } | undefined;
    radius?: {
        center: {
            latitude: number;
            longitude: number;
        };
        radius: number;
    } | undefined;
}>;
export type Incident = z.infer<typeof incidentSchema>;
export type IncidentReport = z.infer<typeof incidentReportSchema>;
export type IncidentSearchFilters = z.infer<typeof incidentSearchFiltersSchema>;
export type MediaFile = z.infer<typeof mediaFileSchema>;
//# sourceMappingURL=incident.d.ts.map