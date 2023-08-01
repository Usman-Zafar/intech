import React from "react";

import { Navigate, Route, Routes } from "react-router-dom";

import { ROUTES } from "../utils/routes";

const AuthRoutes = () => (
  <Routes>
    <Route
      path={ROUTES.AUTH_ROUTES.signup}
      element={<Navigate to={ROUTES.AUTH_ROUTES.signup}></Navigate>}
    />
    <Route
      path={ROUTES.PROTECTED_ROUTES_NAMES.root}
      element={<Navigate to={ROUTES.AUTH_ROUTES.login} replace />}
    />
    <Route
      path="*"
      element={<Navigate to={ROUTES.AUTH_ROUTES.login} replace />}
    />
  </Routes>
);

export default AuthRoutes;
