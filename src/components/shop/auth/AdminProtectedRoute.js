/*import React from "react";
import { Routes, Navigate, } from "react-router-dom";
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

export default AdminProtectedRoute;
*/

import React from "react";
import { Navigate } from "react-router-dom";
import { isAuthenticate, isAdmin } from "./fetchApi";

const AdminProtectedRoute = ({ component: Component, ...rest }) => {
  // Assuming `rest` contains props such as `location`
  const isAuthenticated = isAuthenticate();
  const isAdministrator = isAdmin();

  if (isAuthenticated && isAdministrator) {
    return <Component {...rest} />;
  } else {
    return (
      <Navigate
        to="/user/profile"
        state={{ from: rest.location }}
        replace
      />
    );
  }
};

export default AdminProtectedRoute;

