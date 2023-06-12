import { createContext, useContext, useEffect, useReducer } from "react";
import { DataReducer, initialState } from "../reducer/DataReducer";
import { getAllCategories, getAllProducts } from "../Services/Service";
import { AuthContext } from "./AuthContext";

export const DataContext = createContext();

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DataReducer, initialState);

  const initialDataFetch = async () => {
    try {
      const prodData = await getAllProducts();
      if (prodData.status === 200 || prodData.status === 201) {
        dispatch({
          type: "INITIAL_DATA_FETCH",
          payload: { products: prodData.data.products },
        });
      }

      const catData = await getAllCategories();
      if (catData.status === 200 || catData.status === 201) {
        dispatch({
          type: "INITIAL_DATA_FETCH",
          payload: { categories: catData.data.categories },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    initialDataFetch();
  }, []);

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};
