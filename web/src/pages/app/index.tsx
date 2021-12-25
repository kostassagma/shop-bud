import React, { FC, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { DbContext } from "../../App";
import AuthOnly from "../../modules/auth/authOnly";

const MainApp: FC = () => {
  return (
    <AuthOnly>
      <div>App</div>
    </AuthOnly>
  );
};

export default MainApp;
