import { createContext, useContext, useEffect, useReducer } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { DataReducer, initialState } from "../reducer/DataReducer";
import { AuthContext } from "./AuthContext";
import { getAllCategories, getAllProducts } from "../Services/Service";

export const DataContext = createContext();

export const ContextProvider = ({ children }) => {
  const { token } = useContext(AuthContext);
  const [state, dispatch] = useReducer(DataReducer, initialState);
  const itemQuantity = state?.cart?.reduce((acc, { qty }) => acc + qty, 0);
  const discountPrice = itemQuantity * 50;
  const itemPrice = state?.cart?.reduce(
    (acc, { price, qty }) => acc + price * qty,
    0
  );

  const ToastHandler = (message, type) => {
    if (type === "success") {
      console.log(message);
      return toast.success(message, {
        position: "bottom-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "light",
      });
    } else if (type === "error") {
      toast.error(message, {
        position: "bottom-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "light",
      });
    } else if (type === "info") {
      toast.info(message, {
        position: "bottom-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "light",
      });
    } else if (type === "warning") {
      toast.warn(message, {
        position: "bottom-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "light",
      });
    }
  };

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
  }, [token]);

  return (
    <DataContext.Provider
      value={{
        state,
        dispatch,
        itemQuantity,
        itemPrice,
        discountPrice,
        ToastHandler,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
