import React, { FC } from "react";
import { Link } from "react-router-dom";

const Footer: FC = () => {
  return (
    <div className="w-full bg-slate-100 dark:bg-slate-900 dark:text-white">
      <div className="items-center  grid grid-cols-1 sm:grid-cols-2 text-center space-y-5 p-4">
        <div>
          <h1 className="text-3xl font-extrabold cursor-pointer  inline-block">
            Simplex
          </h1>
          <h1 className="text-3xl cursor-pointer font-extralight inline-block">
            Method
          </h1>
        </div>
        <ul>
          <h2 className="text-2xl font-bold">Links</h2>
          <Link to="/">
            <li>
              <a target="_blank">Github</a>
            </li>
          </Link>
          <Link to="/">
            <li>
              <a target="_blank">Terms & Conditions</a>
            </li>
          </Link>
          <Link to="/">
            <li>
              <a target="_blank">Examples</a>
            </li>
          </Link>
          <Link to="/">
            <li>
              <a target="_blank">Report an issue</a>
            </li>
          </Link>
        </ul>
      </div>
      <div className="text-center text-sm group w-full border-t border-gray-500">
        <Link to="https://github.com/kostassagma/">
          <a target="_blank">
            © Konstantinos Sagmatopoulos{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              fill="currentColor"
              className="inline-block group-hover:opacity-100 opacity-0 h-full mb-1"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
              />
              <path
                fillRule="evenodd"
                d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
              />
            </svg>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
