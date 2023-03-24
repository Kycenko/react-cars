import './assets/styles/global.scss'

import NavBar from "./components/Navbar/NavBar.jsx";
import HomePage from "./pages/Home/HomePage.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<HomePage/>} path={'/'} />
				<Route element={<div>Page not found!</div>} path={'*'} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
