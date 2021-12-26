import React, { FC, useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { DbContext } from "../../App";
import { AuthContext } from "../../modules/auth/authProvider";
import { ThemeContext } from "../../modules/theme/provider";

const JoinPage: FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setError] = useState("");
  const [rememberMe, setRememberMe] = useState(true);
  const { user } = useContext(DbContext);
  const { authenticated } = useContext(AuthContext);
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  if (authenticated) {
    return <Navigate to="/app" />;
  }

  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password != password2) {
      setError("Passwords do not match!");
      return;
    }

    //@ts-ignore
    user.create(username, password, ({ err }) => {
      if (err) {
        setError(err);
      } else {
        //@ts-ignore
        user.auth(username, password, ({ err }) => {
          if (err) {
            setError(err);
          }
        });
      }
    });
  };

  return (
    <div className="bg-white dark:bg-black dark:text-white h-screen flex">
      <div className="m-auto w-full max-w-xs">
        <form
          className="bg-white dark:bg-gray-900 shadow-md rounded px-8 pt-6 pb-6 mb-4"
          onSubmit={submitForm}
        >
          <h1 className="font-bold mb-3 text-4xl">Register</h1>
          {/* Username */}
          <div className="mb-1">
            <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-0">
              Username
            </label>
            <input
              onChange={(e) => {
                setError("");
                setUsername(e.target.value);
              }}
              className="shadow appearance-none rounded w-full py-2 px-3 bg-white text-gray-700 dark:bg-black dark:text-gray-300 focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="JohnWick"
            />
          </div>
          {/* Password */}
          <div className="mb-1">
            <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-0">
              Password
            </label>
            <input
              onChange={(e) => {
                setError("");
                setPassword(e.target.value);
              }}
              className="shadow appearance-none rounded w-full py-2 px-3 bg-white text-gray-700 dark:bg-black dark:text-gray-300 focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="************"
            />
          </div>
          {/* Verify Password */}
          <div className="mb-1">
            <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-0">
              Verify Password
            </label>
            <input
              onChange={(e) => {
                setError("");
                setPassword2(e.target.value);
              }}
              className="shadow appearance-none rounded w-full py-2 px-3 bg-white text-gray-700 dark:bg-black dark:text-gray-300 focus:outline-none focus:shadow-outline"
              id="password2"
              type="password"
              placeholder="************"
            />
          </div>
          <div className="mb-1">
            {error && <p className="text-red-500 text-xs italic">{error}</p>}
          </div>
          <div className="mb-2">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox"
                checked={rememberMe}
                onChange={(e) => {
                  setRememberMe(!rememberMe);
                }}
              />
              <span className="ml-2 text-xs">Remember me</span>
            </label>
          </div>
          {/* Submit */}
          <div className="flex items-center justify-between mb-2">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign In
            </button>
            <Link
              to="/"
              className="font-bold text-blue-500 hover:text-blue-800 inline-block"
            >
              Cancel
            </Link>
          </div>
          <p className="text-xs">
            Already have an account?{" "}
            <Link
              to="/login"
              className="inline-block font-bold text-blue-500 hover:text-blue-800"
            >
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default JoinPage;
