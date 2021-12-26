import React, { FC } from "react";
import { Link } from "react-router-dom";
import NavBar from "../nav/homeNav";

const HomePage: FC = () => {
  return (
    <div>
      <div className="min-h-screen flex flex-col">
        <NavBar />
        <div className="m-auto pb-32 p-5">
          <h1 className="font-bold text-6xl ">Shop Bud</h1>
          <p className="mt-4">
            Decentralized shopping list app with distributed database.
          </p>
          <Link to="/app">
            <button className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
