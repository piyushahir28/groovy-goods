import { v4 as uuid } from "uuid";
export const initialState = {
  products: [],
  categories: [],
  cart: [],
  wishlist: [],
  filters: {
    price: "",
    category: [],
    rating: 5,
    search: "",
  },
  addressList: [
    {
      id: uuid(),
      name: "Piyush Ahir",
      mobile: 8225863117,
      city: "Neemuch",
      pincode: 458441,
      state: "Madhya Pradesh",
      street: "21, Laxmi Niwas, Baghana",
      country: "India",
    },
  ],
  orderList: [],
};

export const DataReducer = (state, action) => {
  switch (action.type) {
    case "INITIAL_DATA_FETCH": {
      if (action.payload.products) {
        return {
          ...state,
          products: action.payload.products,
        };
      }
      if (action.payload.categories) {
        return {
          ...state,
          categories: action.payload.categories,
        };
      }
      break;
    }

    case "CHANGE_FILTER": {
      if (action.filterType === "category") {
        if (state.filters.category.includes(action.payload)) {
          const newCategory = state.filters.category.filter(
            (cat) => cat !== action.payload
          );
          return {
            ...state,
            filters: {
              ...state.filters,
              category: newCategory,
            },
          };
        } else {
          return {
            ...state,
            filters: {
              ...state.filters,
              category: [...state.filters.category, action.payload],
            },
          };
        }
      } else if (action.filterType === "price") {
        return {
          ...state,
          filters: {
            ...state.filters,
            price: action.payload,
          },
        };
      } else if (action.filterType === "rating") {
        return {
          ...state,
          filters: {
            ...state.filters,
            rating: Number(action.payload),
          },
        };
      } else if (action.filterType === "search") {
        return {
          ...state,
          filters: {
            ...state.filters,
            search: action.payload,
          },
        };
      }
      break;
    }

    case "CLEAR_FILTER": {
      return {
        ...state,
        filters: {
          ...state.filters,
          price: "",
          rating: 5,
          category: [],
          search: "",
        },
      };
      break;
    }

    case "ADD_TO_CART": {
      return {
        ...state,
        cart: [...action.payload],
      };
      break;
    }

    case "ADD_TO_WISHLIST": {
      return {
        ...state,
        wishlist: action.payload,
      };
      break;
    }

    case "ADD_ADDRESS": {
      return {
        ...state,
        addressList: [...state.addressList, action.payload],
      };
      break;
    }

    case "DELETE_ADDRESS": {
      const updatedAddress = state.addressList.filter(
        ({ id }) => id !== action.payload
      );
      return {
        ...state,
        addressList: updatedAddress,
      };
      break;
    }

    case "EDIT_ADDRESS": {
      const updatedAddress = state.addressList.map((address) => {
        if (address.id === action.payload.id) {
          return action.payload;
        }
        return address;
      });
      return {
        ...state,
        addressList: updatedAddress,
      };
      break;
    }

    case "ORDER_PLACED": {
      return {
        ...state,
        orderList: [...state.orderList, action.payload],
      };
    }

    default: {
      return {
        ...state,
      };
    }
  }
};
