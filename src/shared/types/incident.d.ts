import { Coordinates } from './location';
export interface Incident {
    id: string;
    reporterId: string;
    type: IncidentType;
    severity: IncidentSeverity;
    title: string;
    description: string;
    location: Coordinates;
    address?: string;
    status: IncidentStatus;
    isAnonymous: boolean;
    mediaUrls: string[];
    tags: string[];
    metadata: IncidentMetadata;
    createdAt: Date;
    updatedAt: Date;
    resolvedAt?: Date;
}
export type IncidentType = 'theft' | 'assault' | 'accident' | 'harassment' | 'suspicious_activity' | 'medical_emergency' | 'fire' | 'other';
export type IncidentSeverity = 'low' | 'medium' | 'high' | 'critical';
export type IncidentStatus = 'pending_review' | 'under_review' | 'verified' | 'rejected' | 'resolved' | 'archived';
export interface IncidentMetadata {
    witnessCount?: number;
    policeReportFiled?: boolean;
    policeReportNumber?: string;
    estimatedDamage?: string;
    injuredParties?: number;
    timeOfIncident?: Date;
    weatherConditions?: string;
    lightingConditions?: 'daylight' | 'dusk' | 'night' | 'poor';
    crowdDensity?: 'empty' | 'sparse' | 'moderate' | 'crowded';
}
export interface IncidentReport {
    type: IncidentType;
    severity: IncidentSeverity;
    title: string;
    description: string;
    location: Coordinates;
    address?: string;
    isAnonymous: boolean;
    mediaFiles?: MediaFile[];
    tags?: string[];
    metadata?: Partial<IncidentMetadata>;
}
export interface MediaFile {
    uri: string;
    name: string;
    type: string;
    size: number;
}
export interface IncidentUpdate {
    id: string;
    status?: IncidentStatus;
    moderatorNotes?: string;
    updatedBy: string;
    updatedAt: Date;
}
export interface IncidentSearchFilters {
    type?: IncidentType[];
    severity?: IncidentSeverity[];
    status?: IncidentStatus[];
    dateRange?: {
        start: Date;
        end: Date;
    };
    locationBounds?: {
        northeast: Coordinates;
        southwest: Coordinates;
    };
    radius?: {
        center: Coordinates;
        radius: number;
    };
    reporterId?: string;
    tags?: string[];
    limit?: number;
    offset?: number;
}
export interface IncidentSearchResult {
    incidents: Incident[];
    totalCount: number;
    hasMore: boolean;
    filters: IncidentSearchFilters;
}
//# sourceMappingURL=incident.d.ts.map