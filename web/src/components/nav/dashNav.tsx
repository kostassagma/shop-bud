import React, { MouseEventHandler, FC, useContext, useState } from "react";
import { Link } from "react-router-dom";
import DownArrowIcon from "../../icons/downArrow";
import { AuthContext } from "../../modules/auth/authProvider";
import { useScreenType } from "../../modules/screenType";
import { ThemeContext } from "../../modules/theme/provider";

const DashNav: FC = () => {
  const { username } = useContext(AuthContext);
  const [openMenu, setOpenMenu] = useState(false);
  const screenType = useScreenType();

  return (
    <div className="w-full bg-gray-100 dark:bg-gray-900 dark:text-white flex row items-center p-4 h-16">
      <div className="flex-1 text-left">
        <h1 className="text-3xl font-bold w-fit">
          <Link to="/">ShopBud</Link>
        </h1>
      </div>
      <div className="flex row space-x-4">
        {username &&
          (screenType === "desktop" ? (
            <div>
              <div
                className="flex flex-row gap-2 cursor-pointer"
                onClick={() => {
                  setOpenMenu(!openMenu);
                }}
              >
                <img
                  src={`https://avatars.dicebear.com/api/bottts/${username}.svg`}
                  className="bg-gray-200 dark:bg-gray-800 p-1 rounded-full h-10"
                />
                <h1 className="text-2xl">{username}</h1>
                <DownArrowIcon width="16" height="16" className="h-10" />
              </div>
              {openMenu && <DropDownMenu />}
            </div>
          ) : (
            <div>
              <div
                className="flex flex-row gap-2 cursor-pointer"
                onClick={() => {
                  setOpenMenu(!openMenu);
                }}
              >
                <img
                  src={`https://avatars.dicebear.com/api/bottts/${username}.svg`}
                  className="bg-gray-200 dark:bg-gray-800 p-1 rounded-full h-10"
                />
              </div>
              {openMenu && <DropDownMenu />}
            </div>
          ))}
      </div>
    </div>
  );
};

export default DashNav;

const DropDownMenu: FC = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  return (
    <div className="bg-white text-base z-10 list-none divide-y divide-gray-100 rounded shadow w-44 fixed right-3 mt-1">
      <ul className="py-1">
        <Link to="/dash">
          <DropDownItem>Dashboard</DropDownItem>
        </Link>
        <Link to="/user">
          <DropDownItem>Settings</DropDownItem>
        </Link>
        <DropDownItem
          onClick={() => {
            setDarkMode(!darkMode);
          }}
        >
          {darkMode ? "Switch to light" : "Switch to dark"}
        </DropDownItem>
      </ul>
    </div>
  );
};

interface DropDownItemProps {
  onClick?: MouseEventHandler<HTMLLIElement>;
}

const DropDownItem: FC<DropDownItemProps> = ({ children, onClick }) => {
  return (
    <li onClick={onClick}>
      <a className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2 cursor-pointer">
        {children}
      </a>
    </li>
  );
};
