import {configureStore} from "@reduxjs/toolkit";
import carsReducer from "./carsSlice.js"
import favouriteSlice from "./favouriteSlice.js";
export const store = configureStore({
	reducer: {
		cars: carsReducer,
		favourite: favouriteSlice
	}
})