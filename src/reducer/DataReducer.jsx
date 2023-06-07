export const initialState = {
  products:[],
  cart:[],
  wishlist:[],
  filters:{}
} 

export const DataReducer = (state, action){
  switch(action.type){
    case "INITIAL_DATA_FETCH": {
      return(
        ...state,
        products:
      )
      break;
    }
  }
}