import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      //mutating the state.(vanilla(older) redux)
      //newState=[...state]
      //return newState;
      //immer library taking care of this.
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    //i don't need action for clearing the cart.if u want u can have it.
    clearCart: (state) => {
      state.items.length = 0;
    },
  },
});

//we will export our actions and reducers.
export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
