import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './global.scss'
import CarPage from './pages/CarPage/CarPage.jsx'
import CartPage from './pages/CartPage/CartPage.jsx'
import FavouritePage from './pages/FavouritePage/FavouritePage.jsx'
import HomePage from './pages/Home/HomePage.jsx'
import { store } from './store/store.js'

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Routes>
					<Route element={<HomePage />} path={'/'} />
					<Route element={<CarPage />} path={'/car/:id'} />
					<Route element={<FavouritePage />} path={'/favourites'} />
					<Route element={<CartPage />} path={'/cart'} />
					<Route element={<div>Page not found!</div>} path={'*'} />
				</Routes>
			</BrowserRouter>
		</Provider>
	)
}

export default App;
