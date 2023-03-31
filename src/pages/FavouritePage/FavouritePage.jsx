import React from "react";
import NavBar from "../../components/Navbar/NavBar.jsx";
import { useSelector } from "react-redux";

const FavouritePage = () => {
  const cars = useSelector((state) => state.favourite.carsInFavourite);
  return (
    <div>
      <NavBar />

      {cars.map((car) => (
        <div key={car.id}>{car.title}</div>
      ))}
    </div>
  );
};

export default FavouritePage;
