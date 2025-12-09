import { User } from './user';
import { Incident, IncidentSearchResult } from './incident';
import { Alert } from './alert';
import { Geofence, LocationSearchResult } from './location';
import { TrustedContact } from './contact';
export interface ApiResponse<T = any> {
    success: boolean;
    data?: T;
    error?: ApiError;
    message?: string;
    timestamp: Date;
}
export interface ApiError {
    code: string;
    message: string;
    details?: Record<string, any>;
    field?: string;
}
export interface PaginationParams {
    page?: number;
    limit?: number;
    sortBy?: string;
    sortOrder?: 'asc' | 'desc';
}
export interface PaginatedResponse<T> {
    items: T[];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
}
export interface LoginRequest {
    email: string;
    password: string;
}
export interface LoginResponse extends ApiResponse<{
    user: User;
    tokens: {
        accessToken: string;
        refreshToken: string;
        expiresIn: number;
    };
}> {
}
export interface RefreshTokenResponse extends ApiResponse<{
    accessToken: string;
    expiresIn: number;
}> {
}
export interface UpdateProfileRequest {
    firstName?: string;
    lastName?: string;
    phoneNumber?: string;
    avatar?: string;
    preferences?: Partial<User['preferences']>;
}
export interface UserListResponse extends PaginatedResponse<User> {
}
export interface CreateIncidentRequest {
    type: Incident['type'];
    severity: Incident['severity'];
    title: string;
    description: string;
    location: Incident['location'];
    address?: string;
    isAnonymous: boolean;
    tags?: string[];
    metadata?: Partial<Incident['metadata']>;
}
export interface UpdateIncidentRequest {
    status?: Incident['status'];
    moderatorNotes?: string;
}
export interface IncidentListResponse extends ApiResponse<IncidentSearchResult> {
}
export interface AlertListResponse extends PaginatedResponse<Alert> {
}
export interface MarkAlertsReadRequest {
    alertIds: string[];
}
export interface GeofenceListResponse extends PaginatedResponse<Geofence> {
}
export interface LocationSearchResponse extends ApiResponse<LocationSearchResult> {
}
export interface CreateGeofenceRequest {
    center: Geofence['center'];
    radius: number;
    type: Geofence['type'];
    name: string;
    description?: string;
    severity: Geofence['severity'];
}
export interface CreateContactRequest {
    name: string;
    phoneNumber: string;
    email?: string;
    relationship: TrustedContact['relationship'];
    priority: TrustedContact['priority'];
    permissions: TrustedContact['permissions'];
}
export interface UpdateContactRequest {
    name?: string;
    phoneNumber?: string;
    email?: string;
    relationship?: TrustedContact['relationship'];
    priority?: TrustedContact['priority'];
    permissions?: Partial<TrustedContact['permissions']>;
    isActive?: boolean;
}
export interface ContactListResponse extends PaginatedResponse<TrustedContact> {
}
export interface SendEmergencyAlertRequest {
    contacts: string[];
    type: 'panic_button' | 'sos' | 'medical_emergency' | 'threat';
    message?: string;
    includeLocation: boolean;
}
export interface SafetyStats {
    totalIncidents: number;
    activeGeofences: number;
    totalUsers: number;
    incidentsByType: Record<string, number>;
    incidentsBySeverity: Record<string, number>;
    recentActivity: {
        incidents: Incident[];
        alerts: Alert[];
    };
}
export interface DashboardResponse extends ApiResponse<SafetyStats> {
}
export interface UploadResponse extends ApiResponse<{
    url: string;
    filename: string;
    size: number;
    type: string;
}> {
}
export interface SearchRequest {
    query: string;
    type?: 'incidents' | 'locations' | 'users' | 'all';
    filters?: Record<string, any>;
    limit?: number;
}
export interface SearchResult {
    incidents?: Incident[];
    locations?: any[];
    users?: User[];
    total: number;
}
export interface SearchResponse extends ApiResponse<SearchResult> {
}
export type RealtimeEventType = 'incident_created' | 'incident_updated' | 'alert_created' | 'geofence_entered' | 'emergency_alert' | 'location_update';
export interface RealtimeEvent<T = any> {
    type: RealtimeEventType;
    data: T;
    timestamp: Date;
    userId?: string;
}
//# sourceMappingURL=api.d.ts.map