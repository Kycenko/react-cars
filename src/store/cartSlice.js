import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    carsInCart: [],
  },
  reducers: {
    setCarInCart: (state, action) => {
      state.carsInCart.push(action.payload);
    },
    deleteCarInCart: (state, action) => {
      state.carsInCart = state.carsInCart.filter(
        (car) => car.id !== action.payload
      );
    },
  },
});

export const { setCarInCart, deleteCarInCart } = cartSlice.actions;

export default cartSlice.reducer;
