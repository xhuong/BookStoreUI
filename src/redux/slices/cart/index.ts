import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    wishList: [],
  },
  reducers: {
    addProductsToCart: (state, action) => {
      // some logic
    },
  },
});

export const { addProductsToCart } = cartSlice.actions;

export default cartSlice.reducer;
