import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

import { BookAPI } from "@/services/BookAPI";

import loadingSlice from "@/redux/slices/loading";
import cartSlice from "@/redux/slices/cart";

const rootReducer = combineReducers({
  cart: cartSlice,
  loading: loadingSlice,
  [BookAPI.reducerPath]: BookAPI.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare().concat(BookAPI.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
