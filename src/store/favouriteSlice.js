import { createSlice } from "@reduxjs/toolkit";

const favouriteSlice = createSlice({
  name: "favourite",
  initialState: {
    carsInFavourite: [],
  },
  reducers: {
    setCarInFavourite: (state, action) => {
      state.carsInFavourite.push(action.payload);
    },
    deleteCarInFavourite: (state, action) => {
      state.carsInFavourite = state.carsInFavourite.filter(
        (car) => car.id !== action.payload
      );
    },
  },
});

export const { setCarInFavourite, deleteCarInFavourite } =
  favouriteSlice.actions;
export default favouriteSlice.reducer;
