import "./assets/styles/global.scss";
import HomePage from "./pages/Home/HomePage.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import CarPage from "./pages/CarPage/CarPage.jsx";
import { Provider } from "react-redux";
import { store } from "./store/index.js";
import FavouritePage from "./pages/FavouritePage/FavouritePage.jsx";
import CartPage from "./pages/CartPage/CartPage.jsx";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route element={<HomePage />} path={"/"} />
          <Route element={<CarPage />} path={"/car/:id"} />
          <Route element={<FavouritePage />} path={"/favourites"} />
          <Route element={<CartPage />} path={"/cart"} />
          <Route element={<div>Page not found!</div>} path={"*"} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
