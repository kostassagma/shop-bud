import React, { FC } from "react";
import { Link } from "react-router-dom";

const HomePage: FC = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;
