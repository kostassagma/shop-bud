import React, { FC, useContext, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { DbContext } from "../../App";
import AllList from "../../components/app/allLists";
import MobileDashPage from "../../components/dash/mobile";
import AuthOnly from "../../modules/auth/authOnly";
import { useScreenType } from "../../modules/screenType";

const MobileDash: FC = () => {
  const screenType = useScreenType();
  const navigate = useNavigate();

  useEffect(() => {
    if (screenType === "desktop") {
      navigate("/app/123");
    }
  }, [screenType]);

  return (
    <AuthOnly>
      <MobileDashPage/>
    </AuthOnly>
  );
};

export default MobileDash;
