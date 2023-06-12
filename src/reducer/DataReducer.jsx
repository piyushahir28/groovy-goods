export const initialState = {
  products: [],
  categories: [],
  cart: [],
  wishlist: [],
  filters: {
    price: "",
    category: {},
    rating: "",
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
    case "DATA_FETCH": {
      console.log("Failed");
    }
  }
};
