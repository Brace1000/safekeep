import { api } from './api.js';

export class AuthService {
  static async login(credentials) {
    try {
      const response = await api.post('/api/auth/login', credentials);

      if (response.success && response.data.tokens) {
        // Store tokens securely
        localStorage.setItem('keepsafe:token', response.data.tokens.accessToken);
        localStorage.setItem('keepsafe:user', JSON.stringify(response.data.user));

        return { success: true, user: response.data.user };
      }

      return { success: false, error: 'Login failed' };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  static async signup(userData) {
    try {
      const response = await api.post('/api/auth/signup', {
        email: userData.email,
        password: userData.password,
        firstName: userData.fullName.split(' ')[0],
        lastName: userData.fullName.split(' ').slice(1).join(' '),
      });

      if (response.success) {
        return { success: true, message: 'Account created successfully' };
      }

      return { success: false, error: response.error?.message || 'Signup failed' };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  static async getProfile() {
    try {
      const response = await api.get('/api/auth/profile');
      return { success: true, user: response.data };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  static logout() {
    localStorage.removeItem('keepsafe:token');
    localStorage.removeItem('keepsafe:user');
    window.location.href = '/login';
  }

  static getCurrentUser() {
    try {
      const user = localStorage.getItem('keepsafe:user');
      return user ? JSON.parse(user) : null;
    } catch {
      return null;
    }
  }

  static isAuthenticated() {
    return !!localStorage.getItem('keepsafe:token');
  }
}
