import React, { FC, useContext } from "react";
import { AuthContext } from "./authProvider";
import { Navigate } from "react-router-dom";

const AuthOnly: FC = ({ children }) => {
  const { authenticated } = useContext(AuthContext);

  if (!authenticated) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
};

export default AuthOnly;
