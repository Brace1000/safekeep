export interface Coordinates {
    latitude: number;
    longitude: number;
}
export interface Location {
    id: string;
    coordinates: Coordinates;
    address?: string;
    city?: string;
    country?: string;
    postalCode?: string;
    placeName?: string;
    createdAt: Date;
    updatedAt: Date;
}
export interface Geofence {
    id: string;
    center: Coordinates;
    radius: number;
    type: GeofenceType;
    name: string;
    description?: string;
    severity: SafetySeverity;
    isActive: boolean;
    metadata: GeofenceMetadata;
    createdAt: Date;
    updatedAt: Date;
}
export type GeofenceType = 'crime_zone' | 'accident_blackspot' | 'high_risk_area' | 'safe_zone';
export type SafetySeverity = 'low' | 'medium' | 'high' | 'critical';
export interface GeofenceMetadata {
    incidentCount: number;
    lastIncidentDate?: Date;
    averageResponseTime?: number;
    verifiedBy?: string;
    source: 'user_report' | 'official_data' | 'crowdsourced' | 'admin_created';
    tags: string[];
}
export interface LocationSearchResult {
    locations: Location[];
    totalCount: number;
    hasMore: boolean;
}
export interface RouteSegment {
    start: Coordinates;
    end: Coordinates;
    distance: number;
    duration: number;
    safetyScore: number;
    riskFactors: RiskFactor[];
}
export interface RiskFactor {
    type: GeofenceType;
    severity: SafetySeverity;
    distance: number;
    description: string;
}
export interface LocationBounds {
    northeast: Coordinates;
    southwest: Coordinates;
}
//# sourceMappingURL=location.d.ts.map