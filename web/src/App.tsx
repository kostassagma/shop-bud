import React, { createContext, FC, useEffect, useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages";
import About from "./pages/about";
import Gun from "gun";
import "gun/sea";
import "gun/axe";
import { IGunChainReference } from "gun/types/chain";
import List from "./pages/list/[id]";
import Login from "./pages/login";
import ThemeProvider from "./modules/theme/provider";
import Join from "./pages/login/join";
import AuthProvider from "./modules/auth/authProvider";
import Slatt from "./pages/app/slatt";
import MainApp from "./pages/app";

interface DbContextTypes {
  gun: IGunChainReference<any, any, "pre_root">;
  user: IGunChainReference<Record<string, any>, any, false>;
}

export const DbContext = createContext({} as DbContextTypes);

const App: FC = () => {
  const [gun] = useState(Gun("http://localhost/gun"));
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
              <Route path="about" element={<About />} />
              <Route path="app" element={<Slatt />}>
                <Route path="" element={MainApp} />
                <Route path="slatt" element={Slatt} />
              </Route>
              <Route path="login">
                <Route path="" element={<Login />} />
                <Route path="join" element={<Join />} />
              </Route>
              <Route path="list/:id" element={<List />} />
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </DbContext.Provider>
    </ThemeProvider>
  );
};

export default App;
