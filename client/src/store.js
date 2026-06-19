import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./slices/apiSlice";
import authReducer from "./slices/authSlice";

export const store = configureStore({
  //reducer, middleware, devTools
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

/*
NOTE
 apiSlice.path
When you create an API slice with RTK Query, it automatically generates a reducerPath property which is just a unique string name for that slice in your store. apiSlice.path doesn't exist so it would be undefined.
*/
