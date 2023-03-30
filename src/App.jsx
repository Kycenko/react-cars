import './assets/styles/global.scss'

import NavBar from "./components/Navbar/NavBar.jsx";
import HomePage from "./pages/Home/HomePage.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";
import CarPage from "./pages/CarPage/CarPage.jsx";
import {Provider} from "react-redux";
import {store} from "./store/index.js";

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Routes>
					<Route element={<HomePage/>} path={'/'} />
					<Route element={<CarPage/>} path={'/car/:id'} />
					<Route element={<div>Page not found!</div>} path={'*'} />
				</Routes>
			</BrowserRouter>
		</Provider>
	
	)
}

export default App
