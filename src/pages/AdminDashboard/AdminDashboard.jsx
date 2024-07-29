// src/pages/AdminDashboard/AdminDashboard.jsx
import { Box } from '@mui/material';
import React from 'react';
import './AdminDashboard.css';

import DashboardContent from './DashboardContent';
import Sidebar from './Sidebar';
import TopBar from './TopBar';


const AdminDashboard = () => {
  return (
    <Box className="admin-dashboard">
      <div className="sidebar">
        <Sidebar/>
      </div>
      <div className="content">
        <div className="topbar">
          <TopBar/>
        </div>
        <div className="dashboard-content">
          <DashboardContent/>
        </div>
      </div>
    </Box>
  );
};

export default AdminDashboard;
