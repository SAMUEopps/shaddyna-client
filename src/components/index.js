import React from "react";
import {
  Home,
  WishList,
  ProtectedRoute,
  AdminProtectedRoute,
  CartProtectedRoute,
  PageNotFound,
  ProductDetails,
  ProductByCategory,
  CheckoutPage,
} from "./shop";
import { DashboardAdmin, Categories, Products, Orders } from "./admin";
import { UserProfile, UserOrders, SettingUser } from "./shop/dashboardUser";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/* Routing All page will be here */
const AppRoutes = (props) => {
  return (
    <Router>
      <Routes>
        {/* Shop & Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/wish-list" element={<WishList />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/products/category/:catId" element={<ProductByCategory />} />
        <Route
          path="/checkout"
          element={<CartProtectedRoute component={CheckoutPage} />}
        />

        {/* Shop & Public Routes End */}

        {/* Admin Routes */}
        <Route
          path="/admin/dashboard"
          element={<AdminProtectedRoute component={DashboardAdmin} />}
        />

        <Route
          path="/admin/dashboard/categories"
          element={<AdminProtectedRoute component={Categories} />}
        />
        <Route
          path="/admin/dashboard/products"
          element={<AdminProtectedRoute component={Products} />}
        />
        <Route
          path="/admin/dashboard/orders"
          element={<AdminProtectedRoute component={Orders} />}
        />
        {/* Admin Routes End */}

        {/* User Dashboard */}
        <Route
          path="/user/profile"
          element={<ProtectedRoute component={UserProfile} />}
        />

        <Route
          path="/user/orders"
          element={<ProtectedRoute component={UserOrders} />}
        />

        <Route
          path="/user/setting"
          element={<ProtectedRoute component={SettingUser} />}
        />

        {/* User Dashboard End */}

        {/* 404 Page */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;

