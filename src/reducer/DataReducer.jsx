import { imageListClasses } from "@mui/material";

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
      name: "Piyush Ahir",
      mobile: 8225863117,
      city: "Neemuch",
      pincode: 458441,
      state: "Madhya Pradesh",
      street: "21, Laxmi Niwas, Baghana",
      country: "India",
    },
  ],
};

export const DataReducer = (state, action) => {
  switch (action.type) {
    case "INITIAL_DATA_FETCH":
      {
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
      }
      break;
    case "CHANGE_FILTER":
      {
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
      }
      break;
    case "CLEAR_FILTER":
      {
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
      }
      break;
    case "UPDATE_WISHLIST": {
      return {
        ...state,
        wishlist: action.payload,
      };
    }
  }
};
