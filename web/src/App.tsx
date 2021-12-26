import React, { createContext, FC, useEffect, useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages";
import Gun from "gun";
import "gun/sea";
import "gun/axe";
import { IGunChainReference } from "gun/types/chain";
import Login from "./pages/login";
import ThemeProvider from "./modules/theme/provider";
import Join from "./pages/login/join";
import AuthProvider from "./modules/auth/authProvider";
import List from "./pages/app/[id]";
import Slatt from "./pages/app/slatt";
import MobileDash from "./pages/app";
import { GUN_DB_URL } from "./lin/contants";

interface DbContextTypes {
  gun: IGunChainReference<any, any, "pre_root">;
  user: IGunChainReference<Record<string, any>, any, false>;
}

export const DbContext = createContext({} as DbContextTypes);

const App: FC = () => {
  const [gun] = useState(Gun(GUN_DB_URL));
  const [user] = useState(gun.user().recall({ sessionStorage: true }));

  useEffect(() => {
    //@ts-ignore
    window.gun = gun;
  }, []);

  return (
    <ThemeProvider>
      <DbContext.Provider value={{ gun, user }}>
        <AuthProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="app">
                <Route path="" element={<MobileDash />} />
                <Route path=":id" element={<List />} />
                <Route path="slatt" element={<Slatt />} />
              </Route>
              <Route path="login">
                <Route path="" element={<Login />} />
                <Route path="join" element={<Join />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </DbContext.Provider>
    </ThemeProvider>
  );
};

export default App;
