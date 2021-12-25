import React, {
  FC,
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";

interface ThemeTypes {
  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
}

export const ThemeContext = createContext({} as ThemeTypes);

const ThemeProvider: FC = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  useLayoutEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setDarkMode(true);
    } else if (storedTheme === "light") {
      setDarkMode(false);
    } else {
      setDarkMode(false);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "theme");
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
