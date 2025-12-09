// src/routes/AppRoutes.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import PublicLayout from '../components/layout/layouts/PublicLayout';
import PrivateLayout from '../components/layout/layouts/PrivateLayout';

import LoginPage from '../pages/Auth/LoginPage';
import SignupPage from '../pages/Auth/SignupPage'; 

import DashboardPage from '../pages/Dashboard/DashboardPage';
import AlertsPage from '../pages/Alerts/AlertsPage';
import SettingsPage from '../pages/Settings/SettingsPage'; 
import NotFoundPage from '../pages/NotFound/NotFoundPage';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<SignupPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>

        {/* Private Routes (require authentication) */}
        <Route element={<PrivateLayout />}>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/alerts" element={<AlertsPage />} />
          <Route path="/settings" element={<SettingsPage />} /> {}
          {}
          <Route path="/trusted-contacts" element={<div></div>} /> {}
        </Route>

        {/* Catch-all for undefined routes */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;