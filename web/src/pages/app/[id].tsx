import React, { FC, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import DesktopList from "../../components/app/desktop";
import MobileList from "../../components/app/mobile";
import DashPage from "../../components/dash";
import AuthOnly from "../../modules/auth/authOnly";
import { useScreenType } from "../../modules/screenType";

const List: FC = () => {
  const { id } = useParams();
  const screenType = useScreenType();

  return (
    <AuthOnly>
      <DashPage />
    </AuthOnly>
  );
};

export default List;
