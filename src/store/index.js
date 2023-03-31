import { configureStore } from "@reduxjs/toolkit";
import carsReducer from "./carsSlice.js";
import favouriteReducer from "./favouriteSlice.js";
import cartReducer from "./cartSlice.js";

export const store = configureStore({
  reducer: {
    cars: carsReducer,
    favourite: favouriteReducer,
    cart: cartReducer,
  },
});
