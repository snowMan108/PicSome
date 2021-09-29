import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action) => {
      /* Petir: */
      let newBasket = state.items.filter(
        (basketItem) => basketItem.id !== action.payload
      );
      state.items = newBasket;

      /* Sonny: */
      /* const index = state.items.findIndex(
        (basketItem) => basketItem.id === action.payload
      );

      let newBasket = [...state.items];
      if (index >= 0) {
        //The item exists in the basket, remove it
        newBasket.splice(index, 1);
      } else {
        //the item doesn't exist
        console.warn(
          `Can't remove product ${action.payload} as it is not in the basket`
        );
      }
      state.items = newBasket; */
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state) => state.basket.items;

export default basketSlice.reducer;
