import React, { FC, useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { DbContext } from "../../App";
import { AuthContext } from "../../modules/auth/authProvider";

const LoginPage: FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [rememberMe, setRememberMe] = useState(true);
  const { user } = useContext(DbContext);
  const { authenticated } = useContext(AuthContext);

  if (authenticated) {
    return <Navigate to="/app" />;
  }

  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //@ts-ignore
    user.auth(username, password, ({ err }) => {
      if (err) {
        setError(err);
      }
    });
  };

  return (
    <div className="bg-white dark:bg-black h-screen flex">
      <div className="m-auto w-full max-w-xs">
        <form
          className="bg-white dark:bg-gray-900 shadow-md rounded px-8 pt-6 pb-6 mb-4"
          onSubmit={submitForm}
        >
          <h1 className="font-bold mb-3 text-4xl">Login</h1>
          {/* Username */}
          <div className="mb-2">
            <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-0">
              Username
            </label>
            <input
              onChange={(e) => {
                setError("");
                setUsername(e.target.value);
              }}
              className="shadow appearance-none rounded w-full py-2 px-3 bg-white text-gray-700 dark:bg-black dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
            />
          </div>
          {/* Password */}
          <div>
            <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-0">
              Password
            </label>
            <input
              onChange={(e) => {
                setError("");
                setPassword(e.target.value);
              }}
              className="shadow appearance-none rounded w-full py-2 px-3 bg-white text-gray-700 dark:bg-black dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
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
            Don{"'"}t already have an account?{" "}
            <Link
              to="/login/join"
              className="inline-block font-bold text-blue-500 hover:text-blue-800"
            >
              Create One
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
