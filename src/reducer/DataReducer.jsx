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
        }
      }
      break;
  }
};
