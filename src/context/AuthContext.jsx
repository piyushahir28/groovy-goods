import { createContext } from "react";

export const AuthContext = createContext();

export const ContextAuth = ({ children }) => {
  return <AuthContext.Provider>{children}</AuthContext.Provider>;
};
