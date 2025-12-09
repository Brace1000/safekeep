import { Coordinates, GeofenceType } from './location';
export interface Alert {
    id: string;
    userId: string;
    type: AlertType;
    title: string;
    message: string;
    severity: AlertSeverity;
    location?: Coordinates;
    geofenceId?: string;
    isRead: boolean;
    isActive: boolean;
    expiresAt?: Date;
    metadata: AlertMetadata;
    createdAt: Date;
    updatedAt: Date;
}
export type AlertType = 'geofence_entry' | 'incident_nearby' | 'trusted_contact_alert' | 'system_notification' | 'safety_warning' | 'emergency_alert';
export type AlertSeverity = 'info' | 'warning' | 'danger' | 'critical';
export interface AlertMetadata {
    incidentId?: string;
    geofenceType?: GeofenceType;
    distance?: number;
    trustedContactId?: string;
    actionRequired?: boolean;
    actionUrl?: string;
    category: AlertCategory;
    source: AlertSource;
}
export type AlertCategory = 'safety' | 'emergency' | 'system' | 'social' | 'location';
export type AlertSource = 'geofencing' | 'incident_report' | 'trusted_contact' | 'system' | 'admin';
export interface AlertPreferences {
    enabled: boolean;
    types: AlertType[];
    severities: AlertSeverity[];
    radius: number;
    quietHours?: {
        start: string;
        end: string;
    };
    channels: NotificationChannel[];
}
export type NotificationChannel = 'push' | 'sms' | 'email' | 'in_app';
export interface AlertTrigger {
    type: AlertType;
    conditions: AlertCondition[];
    actions: AlertAction[];
    isActive: boolean;
}
export interface AlertCondition {
    field: string;
    operator: 'equals' | 'not_equals' | 'greater_than' | 'less_than' | 'contains' | 'in';
    value: any;
}
export interface AlertAction {
    type: 'notification' | 'geofence' | 'api_call';
    channel?: NotificationChannel;
    template?: string;
    data?: Record<string, any>;
}
export interface AlertSummary {
    total: number;
    unread: number;
    byType: Record<AlertType, number>;
    bySeverity: Record<AlertSeverity, number>;
    recent: Alert[];
}
export interface PushNotificationPayload {
    title: string;
    body: string;
    data?: Record<string, any>;
    sound?: string;
    badge?: number;
    priority?: 'default' | 'normal' | 'high';
}
//# sourceMappingURL=alert.d.ts.map