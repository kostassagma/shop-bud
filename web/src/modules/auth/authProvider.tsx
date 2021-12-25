import React, {
  FC,
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
  useContext,
} from "react";
import { DbContext } from "../../App";

interface AuthTypes {
  authenticated: boolean;
  setAuthenticated: Dispatch<SetStateAction<boolean>>;
}

export const AuthContext = createContext({} as AuthTypes);

const AuthProvider: FC = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const { gun, user } = useContext(DbContext);

  useEffect(() => {
    //@ts-ignore
    gun.on("auth", async (event) => {
      setAuthenticated(true);
      const alias = await user.get("alias");
      console.log(alias);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ authenticated, setAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
