/*import React from "react";
import { Route, Navigate } from "react-router-dom";
import { isAuthenticate, isAdmin } from "./fetchApi";

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticate() && !isAdmin() ? (
        <Component {...props} />
      ) : (
        <Navigate
          to={{
            pathname: "/",
            state: { from: props.location },
          }}
        />
      )
    }
  />
);

export default ProtectedRoute;*/

import React from "react";
import { Navigate } from "react-router-dom";
import { isAuthenticate, isAdmin } from "./fetchApi";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = isAuthenticate();
  const isUser = !isAdmin();

  if (isAuthenticated && isUser) {
    return <Component {...rest} />;
  } else {
    return (
      <Navigate
        to="/"
        state={{ from: rest.location }}
        replace
      />
    );
  }
};

export default ProtectedRoute;

