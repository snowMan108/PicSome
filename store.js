import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./slices/basketSlice";
import favoritesReducer from "./slices/favoritesSlice";

/* THE GLOBAL STORE SETUP */
export const store = configureStore({
  reducer: {
    basket: basketReducer,
    favorites: favoritesReducer,
  },
});
