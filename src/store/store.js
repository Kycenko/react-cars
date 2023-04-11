import { configureStore } from '@reduxjs/toolkit'

import favoriteReducer from './favoriteSlice.js'
import { carsApi } from './carsApi.js'
import initialCarsReducer from './initialCarsSlice.js'

export const store = configureStore({
	reducer: {
		initialCars: initialCarsReducer,
		favorite: favoriteReducer,
		[carsApi.reducerPath]: carsApi.reducer
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(carsApi.middleware)
})
