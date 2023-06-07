import { createContext } from "react";

export const DataContext = createContext();

export const ContextProvider = ({ children }) => {
  return <DataContext.Provider>{children}</DataContext.Provider>;
};
