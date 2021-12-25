import React, { createContext, FC, useEffect, useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages";
import About from "./pages/about";
import Gun from "gun";
import { IGunChainReference } from "gun/types/chain";
import Team from "./pages/list/[id]";

interface DbContextTypes {
  gun: IGunChainReference<any, any, "pre_root">;
}

export const DbContext = createContext({} as DbContextTypes);

const App: FC = () => {
  const [gun] = useState(Gun("http://localhost/gun"));

  useEffect(() => {
    //@ts-ignore
    window.gun = gun;
  }, []);

  return (
    <DbContext.Provider value={{ gun }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="list/:id" element={<Team />} />
        </Routes>
      </BrowserRouter>
    </DbContext.Provider>
  );
};

export default App;
