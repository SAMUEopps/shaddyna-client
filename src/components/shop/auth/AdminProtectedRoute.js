/*import React from "react";
import { Routes, Navigate } from "react-router-dom";
import { isAuthenticate, isAdmin } from "./fetchApi";

const AdminProtectedRoute = ({ component: Component, ...rest }) => (
  <Routes
    {...rest}
    render={(props) =>
      isAdmin() && isAuthenticate() ? (
        <Component {...props} />
      ) : (
        <Navigate
          to={{
            pathname: "/user/profile",
            state: { from: props.location },
          }}
        />
      )
    }
  />
);

export default AdminProtectedRoute;*/

import React from 'react';
import { Route, Navigate, useLocation } from 'react-router-dom';
import { isAdmin, isAuthenticate } from './fetchApi';

const AdminProtectedRoute = ({ element: Component, ...rest }) => {
  const location = useLocation();

  return (
    <Route
      {...rest}
      element={
        isAdmin() && isAuthenticate() ? (
          <Component />
        ) : (
          <Navigate to={{ pathname: '/user/profile', state: { from: location } }} replace />
        )
      }
    />
  );
};

export default AdminProtectedRoute;

