export interface TrustedContact {
    id: string;
    userId: string;
    name: string;
    phoneNumber: string;
    email?: string;
    relationship: ContactRelationship;
    priority: ContactPriority;
    isActive: boolean;
    permissions: ContactPermissions;
    metadata: ContactMetadata;
    createdAt: Date;
    updatedAt: Date;
}
export type ContactRelationship = 'family' | 'friend' | 'colleague' | 'neighbour' | 'emergency_services' | 'medical_professional' | 'other';
export type ContactPriority = 1 | 2 | 3 | 4 | 5;
export interface ContactPermissions {
    receiveAlerts: boolean;
    receiveLocation: boolean;
    canCall: boolean;
    canText: boolean;
    emergencyOnly: boolean;
}
export interface ContactMetadata {
    lastContacted?: Date;
    responseTime?: number;
    reliabilityScore?: number;
    notes?: string;
    avatar?: string;
    preferredContactMethod: 'phone' | 'sms' | 'email' | 'app';
}
export interface EmergencyAlert {
    id: string;
    userId: string;
    contacts: string[];
    type: EmergencyType;
    message: string;
    location?: {
        latitude: number;
        longitude: number;
        address?: string;
        accuracy?: number;
    };
    status: EmergencyStatus;
    responses: EmergencyResponse[];
    createdAt: Date;
    resolvedAt?: Date;
}
export type EmergencyType = 'panic_button' | 'location_alert' | 'check_in_missed' | 'sos' | 'medical_emergency' | 'threat';
export type EmergencyStatus = 'sent' | 'delivered' | 'acknowledged' | 'responded' | 'resolved' | 'failed';
export interface EmergencyResponse {
    contactId: string;
    status: EmergencyStatus;
    responseTime: number;
    message?: string;
    location?: {
        latitude: number;
        longitude: number;
    };
    respondedAt: Date;
}
export interface ContactGroup {
    id: string;
    userId: string;
    name: string;
    description?: string;
    contacts: string[];
    isDefault: boolean;
    createdAt: Date;
    updatedAt: Date;
}
export interface CheckInSchedule {
    id: string;
    userId: string;
    name: string;
    contacts: string[];
    interval: CheckInInterval;
    isActive: boolean;
    lastCheckIn?: Date;
    nextCheckIn: Date;
    gracePeriod: number;
    message?: string;
    createdAt: Date;
    updatedAt: Date;
}
export type CheckInInterval = 'hourly' | 'daily' | 'weekly' | 'custom';
export interface CheckInRecord {
    id: string;
    scheduleId: string;
    userId: string;
    checkInTime: Date;
    location?: {
        latitude: number;
        longitude: number;
        address?: string;
    };
    status: 'on_time' | 'late' | 'missed';
    notes?: string;
}
export interface ContactInvitation {
    id: string;
    inviterId: string;
    inviteeEmail: string;
    inviteePhone?: string;
    relationship: ContactRelationship;
    message?: string;
    status: 'pending' | 'accepted' | 'declined' | 'expired';
    expiresAt: Date;
    createdAt: Date;
    acceptedAt?: Date;
}
//# sourceMappingURL=contact.d.ts.map