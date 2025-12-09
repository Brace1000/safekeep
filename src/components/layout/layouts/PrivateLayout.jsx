// src/components/layout/layouts/PrivateLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import DashboardLayout from '../Dashboard/DashboardLayout/DashboardLayout';

const PrivateLayout = () => {
  return (
    <DashboardLayout>
      <Outlet />
    </DashboardLayout>
  );
};

export default PrivateLayout;