import React from 'react';
import SiteNav from './Common/SiteNav'; // Your vertical sidebar component
import { Outlet } from 'react-router-dom'; // Outlet from react-router for nested routes
import './MainLayout.css'; // The CSS file for the main layout

const MainLayout = () => {
  return (
    <div className="app-layout">
      <SiteNav />
      <div className="main-content">
        <Outlet /> {/* This is where the rest of your pages will be rendered */}
      </div>
    </div>
  );
};

export default MainLayout;
