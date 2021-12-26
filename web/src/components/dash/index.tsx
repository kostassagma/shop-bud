import React, { createContext, FC, useEffect, useState } from "react";
import DashNav from "../nav/dashNav";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useScreenType } from "../../modules/screenType";
import Footer from "../footer";
import MyListsTab from "./myLists";
import ListDetailsTab from "./listDetails";

interface OpenList {
  id: string;
}

export const OpenListContext = createContext({} as OpenList);

const DashPage: FC = () => {
  const { id } = useParams();
  const screenType = useScreenType();
  const [roomOpened, setRoomOpened] = useState("");

  useEffect(() => {
    if (id) {
      setRoomOpened(String(id));
    }
  }, [id]);

  return (
    <OpenListContext.Provider value={{ id: roomOpened }}>
      <div className="h-screen">
        <DashNav />
        <div style={{ height: "calc(100% - 4rem)" }} className="flex flex-col">
          {screenType === "mobile" && (
            <Link to="/app">
              <a className="inline-block font-bold text-blue-500 hover:text-blue-800 m-1 ml-5">
                {"←"} Back to my rooms
              </a>
            </Link>
          )}
          <div className="p-5 pt-0 sm:pt-5 grid grid-cols-1 sm:grid-cols-2 gap-5 h-full">
            {screenType === "desktop" && <MyListsTab />}
            <ListDetailsTab />
          </div>
        </div>
      </div>
      <Footer />
    </OpenListContext.Provider>
  );
};

export default DashPage;
