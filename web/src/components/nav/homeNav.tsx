import React, { useContext, FC } from "react";
import { Link } from "react-router-dom";
import MoonIcon from "../../icons/moon";
import SunIcon from "../../icons/sun";
import { ThemeContext } from "../../modules/theme/provider";

const HomeNav: FC = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <div className="w-full bg-gray-100 dark:bg-gray-900 dark:text-white flex row items-center p-4 py-2">
      <div className="flex-1 text-left">
        <Link to="/">
          <div>
            <h1 className="text-3xl font-extrabold cursor-pointer inline-block">
              Shop
            </h1>
            <h1 className="text-3xl cursor-pointer font-extralight inline-block">
              Bud
            </h1>
          </div>
        </Link>
      </div>

      <div
        onClick={() => {
          setDarkMode(!darkMode);
        }}
        className="hover:bg-slate-200 dark:hover:bg-slate-800 p-3 rounded-md cursor-pointer"
      >
        {darkMode ? (
          <SunIcon width="25" height="25" className="h-full fill-indigo-700" />
        ) : (
          <MoonIcon
            width="25"
            height="25"
            fill="currentColor"
            className="h-full fill-indigo-700"
          />
        )}
      </div>
    </div>
  );
};

export default HomeNav;
