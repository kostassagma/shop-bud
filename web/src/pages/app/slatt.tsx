import React, { FC, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { DbContext } from "../../App";
import AuthOnly from "../../modules/auth/authOnly";

const Slatt: FC = () => {
  return (
    <AuthOnly>
      <div>AbGes</div>
    </AuthOnly>
  );
};

export default Slatt;
