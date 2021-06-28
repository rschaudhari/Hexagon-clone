import React from 'react';
import { Navigate } from 'react-router-dom';

import DashboardLayout from './layouts/DashboardLayout/DashboardLayout';
import MainLayout from './layouts/MainLayout/MainLayout';


import DashboardView from './screens/Dashboard/Dashboard';
import AddUsers from './screens/userManagement/AddUsers';
import Users from './screens/userManagement/Users';
import UserManagement from './screens/userManagement/UserManagement';

import Login from './screens/auth/Login';
import OrderManagement from './screens/orderManagement/OrderManagement';
import OpenOrders from './screens/orderManagement/OpenOrders';
import AddOrder from './screens/myorder/AddOrder';
import OkayOrders from './screens/orderManagement/OkayOrders';
import NotOkayOrders from './screens/orderManagement/NotOkayOrders';
import MyOrderList from './screens/myorder/MyOrderList';
import MyOrderManagement from './screens/myorder/MyOrderManagement';


const routes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      { path: 'dashboard', element: <DashboardView /> },
      { path: 'userManagement', element: <UserManagement/> },      
      { path: 'addUsers', element: <AddUsers /> },
      { path: 'users', element: <Users /> },
      { path: 'orderManagement', element: <OrderManagement /> },
      { path: 'addOrder', element: <AddOrder /> },
      { path: 'openOrder', element: <OpenOrders /> },
      { path: 'okayOrders', element: <OkayOrders /> },
      { path: 'notOkayOrders', element: <NotOkayOrders /> },
      { path: 'myOrderList', element: <MyOrderList /> },
      { path: 'myOrderManagement', element: <MyOrderManagement /> }


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
