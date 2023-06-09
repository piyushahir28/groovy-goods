import { createContext } from "react";

export const DataContext = createContext();

export const ContextProvider = ({ children }) => {
  return (
    <DataContext.Provider value={{ data: 1 }}>{children}</DataContext.Provider>
  );
};
