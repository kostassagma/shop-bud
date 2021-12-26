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
  username: string;
}

export const AuthContext = createContext({} as AuthTypes);

const AuthProvider: FC = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const { gun, user } = useContext(DbContext);

  useEffect(() => {
    //@ts-ignore
    gun.on("auth", async (event) => {
      setAuthenticated(true);
      const alias = await user.get("alias");
      console.log(alias);
      setUsername(String(alias))
    });
  }, []);

  return (
    <AuthContext.Provider value={{ authenticated, setAuthenticated, username }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
