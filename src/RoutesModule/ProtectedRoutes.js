import React from 'react';
import { Navigate,Outlet } from 'react-router-dom';

const ProtectedRoutes = () => {
    const isAuth=window.localStorage.getItem('TokenValue')

  return isAuth ? <Outlet />: <Navigate to ="/login" />;
};

export default ProtectedRoutes;
