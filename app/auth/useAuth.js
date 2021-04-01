import { useContext } from "react";
import jwtDecode from "jwt-decode";

import AuthContext from "./context";
import authStorage from "./storage";

export default useAuth = () => {
  const { user, setUser } = useContext(AuthContext);

  const logIn = (authToken) => {
    const user = jwtDecode(authToken);
    console.log("Login screen --- user decoded data--", user);
    setUser(user);
    authStorage.storeToken(authToken);
  };
  const logOut = () => {
    authStorage.removeToken();
    setUser(null);
  };

  return { user, logIn, logOut };
};
