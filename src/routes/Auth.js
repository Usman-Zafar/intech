import React from "react";
import { ValidationSchemaExample } from "../Component/SignUpComponenet";
import { LogInValidation } from "../Component/LogInComponent";
import { Route, Routes } from "react-router-dom";

import { ROUTES } from "../utils/routes";

const AuthRoutes = () => (
  <Routes>
    <Route
      path={ROUTES.AUTH_ROUTES.signin}
      element={<ValidationSchemaExample />}
    />
    <Route path={ROUTES.AUTH_ROUTES.signup} element={<LogInValidation />} />
  </Routes>
);

export default AuthRoutes;
