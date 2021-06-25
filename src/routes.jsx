import React from 'react';
import { Navigate } from 'react-router-dom';

import DashboardLayout from './layouts/DashboardLayout/DashboardLayout';
import MainLayout from './layouts/MainLayout/MainLayout';

// import AccountView from 'src/views/account/AccountView';
// import CustomerListView from 'src/views/customer/CustomerListView';
import DashboardView from './screens/Dashboard/Dashboard';
import AddUsers from './screens/userManagement/AddUser';
import Users from './screens/userManagement/Users';
import UserManagement from './screens/userManagement/UserManagement';

 import Login from './screens/auth/Login';
// import NotFoundView from 'src/views/errors/NotFoundView';
// import ProductListView from 'src/views/product/ProductListView';
// import RegisterView from 'src/views/auth/RegisterView';
// import SettingsView from 'src/views/settings/SettingsView';

const routes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      { path: 'dashboard', element: <DashboardView /> },
      { path: 'userManagement', element: <UserManagement/> },      
      { path: 'addUsers', element: <AddUsers /> },
      { path: 'users', element: <Users /> }

    ]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'login', element: <Login /> },
      { path: '404', element: <DashboardView /> },
      { path: '/', element: <Navigate to="/app/dashboard" /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;
