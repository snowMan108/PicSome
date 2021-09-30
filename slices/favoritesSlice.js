import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromFavorites: (state, action) => {
      let newFavorites = state.items.filter(
        (basketItem) => basketItem.id !== action.payload
      );
      state.items = newFavorites;
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state) => state.favorites.items;

export default favoritesSlice.reducer;
