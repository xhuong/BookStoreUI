import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

import loadingSlice from "@/redux/slices/loading";
import cartSlice from "@/redux/slices/cart";

import { BookAPI } from "@/services/BookAPI";
import { OrderAPI } from "@/services/OrderAPI";

const rootReducer = combineReducers({
  cart: cartSlice,
  loading: loadingSlice,
  [BookAPI.reducerPath]: BookAPI.reducer,
  [OrderAPI.reducerPath]: OrderAPI.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare()
      .concat(BookAPI.middleware)
      .concat(OrderAPI.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
