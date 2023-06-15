import { createContext, useContext, useEffect, useReducer } from "react";
import { DataReducer, initialState } from "../reducer/DataReducer";
import { AuthContext } from "./AuthContext";
import {
  getAllCategories,
  getAllProducts,
  getWishList,
} from "../Services/Service";

export const DataContext = createContext();

export const ContextProvider = ({ children }) => {
  const { token } = useContext(AuthContext);
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
    if (token) {
      const wishListData = await getWishList(token);
      dispatch({
        type: "UPDATE_WISHLIST",
        payload: { wishlist: wishListData },
      });
    }
  };

  useEffect(() => {
    initialDataFetch();
  }, [token]);

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};
