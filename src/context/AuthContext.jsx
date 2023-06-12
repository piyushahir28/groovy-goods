import { useState } from "react";
import { createContext } from "react";

import { LoginService, SignUpService } from "../Services/Service";
import { useLocation, useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const localStorageItem = JSON.parse(localStorage.getItem("loginItems"));
  const [token, setToken] = useState(localStorageItem?.token || "");
  const [currUser, setCurrUser] = useState(localStorageItem?.user);

  const navigate = useNavigate();
  const location = useLocation();

  const loginHandler = async (email, password) => {
    try {
      const {
        data: { foundUser, encodedToken },
        status,
      } = await LoginService({ email, password });
      if (status === 200 || status === 201) {
        localStorage.setItem(
          "loginItems",
          JSON.stringify({ token: encodedToken, user: foundUser })
        );
        setCurrUser(foundUser);
        setToken(encodedToken);
        console.log("Great Success");
        navigate(location?.state?.from?.pathname || "/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const logoutHandler = () => {
    localStorage.removeItem("loginItems");
    setToken(null);
    setCurrUser(null);
  };

  const signupHandler = async (email, password, name) => {
    try {
      const {
        data: { createdUser, encodedToken },
        status,
      } = await SignUpService({ email, password, name });
      if (status === 200 || status === 201) {
        localStorage.setItem(
          "loginItems",
          JSON.stringify({ token: encodedToken, user: createdUser })
        );
        setCurrUser(createdUser);
        setToken(encodedToken);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <AuthContext.Provider
      value={{ token, loginHandler, currUser, signupHandler, logoutHandler }}
    >
      {children}
    </AuthContext.Provider>
  );
};
