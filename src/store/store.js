import { configureStore } from '@reduxjs/toolkit'
import carsReducer from './carsSlice.js'
import favoriteReducer from './favoriteSlice.js'

import filterReducer from './filterSlice.js'
import { carsApi } from './carsApi.js'

export const store = configureStore({
	reducer: {
		[carsApi.reducerPath]: carsApi.reducer,
		cars: carsReducer,
		favorite: favoriteReducer,
		filter: filterReducer
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(carsApi.middleware)
})
