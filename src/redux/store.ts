import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import cartSlice from "./slices/cart";

const rootReducer = combineReducers({
  cart: cartSlice,
});
const store = configureStore({
  reducer: rootReducer,
});

setupListeners(store.dispatch);

export default store;
