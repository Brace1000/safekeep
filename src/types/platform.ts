// Platform-specific types for React Web
import { User, Alert, Incident, TrustedContact, Geofence } from '@keepsafe/shared';

// Web-specific location types (Geolocation API)
export interface WebLocationData extends GeolocationCoordinates {
  timestamp: number;
}

export interface LocationPermissionState {
  state: 'granted' | 'denied' | 'prompt';
}

// Web-specific notification types (Notification API)
export interface WebNotificationData {
  title: string;
  body: string;
  icon?: string;
  badge?: string;
  image?: string;
  data?: any;
  requireInteraction?: boolean;
  silent?: boolean;
  tag?: string;
}

// Service Worker types
export interface ServiceWorkerMessage {
  type: 'LOCATION_UPDATE' | 'NOTIFICATION_CLICK' | 'BACKGROUND_SYNC';
  payload: any;
}

export interface BackgroundSyncConfig {
  syncName: string;
  retryInterval: number; // milliseconds
  maxRetries: number;
}

// Web-specific file upload types
export interface WebFileData extends File {
  preview?: string; // For image previews
}

// Camera and media types for web
export interface MediaStreamConstraints {
  audio?: boolean | MediaTrackConstraints;
  video?: boolean | MediaTrackConstraints;
}

export interface CameraCapabilities {
  facingMode: 'user' | 'environment';
  zoom: boolean;
  torch: boolean;
  focusMode: string[];
}

// WebRTC types for peer-to-peer emergency calls
export interface WebRTCOffer {
  type: 'offer';
  sdp: string;
}

export interface WebRTCAnswer {
  type: 'answer';
  sdp: string;
}

export interface WebRTCIceCandidate {
  candidate: string;
  sdpMid: string;
  sdpMLineIndex: number;
}

// Emergency call types
export interface EmergencyCallConfig {
  twilioToken?: string;
  emergencyNumbers: string[];
  autoDial: boolean;
  recordingEnabled: boolean;
}

// Offline storage types (IndexedDB)
export interface OfflineStorageConfig {
  dbName: string;
  version: number;
  stores: {
    incidents: boolean;
    alerts: boolean;
    userData: boolean;
  };
}

export interface IndexedDBIncident extends Incident {
  syncStatus: 'pending' | 'syncing' | 'synced' | 'failed';
  localId: string;
  lastModified: Date;
}

// Push notification subscription types
export interface PushSubscriptionData {
  endpoint: string;
  keys: {
    p256dh: string;
    auth: string;
  };
  userId: string;
}

// Geofencing with Web APIs
export interface WebGeofence extends Geofence {
  webId?: string; // For managing web geofences
  persistent: boolean; // Whether to persist across sessions
}

// Analytics and tracking types
export interface WebAnalyticsEvent {
  event: string;
  category: 'user' | 'incident' | 'alert' | 'navigation';
  action: string;
  label?: string;
  value?: number;
  userId?: string;
  sessionId: string;
  timestamp: Date;
  userAgent: string;
  url: string;
}

// Browser storage types
export interface StorageQuota {
  used: number;
  available: number;
  total: number;
}

// Web Share API types
export interface ShareData {
  title?: string;
  text?: string;
  url?: string;
  files?: File[];
}

// Vibration API for haptic feedback simulation
export interface VibrationPattern {
  duration: number;
  pause?: number;
  repeat?: number;
}

// Battery API for power management
export interface BatteryStatus {
  charging: boolean;
  chargingTime: number;
  dischargingTime: number;
  level: number; // 0-1
}

// Network information for adaptive features
export interface NetworkInfo {
  effectiveType: 'slow-2g' | '2g' | '3g' | '4g';
  downlink: number;
  rtt: number;
  saveData: boolean;
}
