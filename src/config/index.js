// src/config/constants.js
export const API_CONFIG = {
  BASE_URL: import.meta.env.VITE_API_URL || 'http://localhost:3000',
  ENV: import.meta.env.VITE_ENV || 'development',
  TIMEOUT: 10000, // 10 seconds
};

// Export individual constants
export const API_URL = API_CONFIG.BASE_URL;
export const IS_PRODUCTION = API_CONFIG.ENV === 'production';