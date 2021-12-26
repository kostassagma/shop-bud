import React, { createContext, FC, useEffect, useState } from "react";
import DashNav from "../nav/dashNav";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useScreenType } from "../../modules/screenType";
import Footer from "../footer";
import MyListsTab from "./myLists";


const MobileDashPage: FC = () => {
  const screenType = useScreenType();

  return (
    <div>
      <div className="h-screen">
        <DashNav />
        <div style={{ height: "calc(100% - 4rem)" }} className="flex flex-col">
          <div className="p-5 grid grid-cols-1 sm:grid-cols-2 gap-5 h-full">
            {screenType === "desktop" && <MyListsTab />}
            <MyListsTab />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MobileDashPage;
