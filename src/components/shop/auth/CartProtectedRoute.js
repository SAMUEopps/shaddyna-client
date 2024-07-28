/*import React from "react";
import { Routes, Navigate } from "react-router-dom";
import { isAuthenticate } from "./fetchApi";

const CartProtectedRoute = ({ component: Component, ...rest }) => (
  <Routes
    {...rest}
    render={(props) =>
      JSON.parse(localStorage.getItem("cart")).length !== 0 &&
      isAuthenticate() ? (
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

export default CartProtectedRoute;*/
import React from "react";
import { Navigate } from "react-router-dom";
import { isAuthenticate } from "./fetchApi";

const CartProtectedRoute = ({ component: Component, ...rest }) => {
  const cart = JSON.parse(localStorage.getItem("cart"));
  const isAuthenticated = isAuthenticate();

  if (cart && cart.length !== 0 && isAuthenticated) {
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

export default CartProtectedRoute;
