import React from "react";
import CarItem from "../CarItem/CarItem.jsx";

const CarsList = ({ cars }) => {
  return (
    <div>
      {cars.map((car) => (
        <CarItem car={car} key={car.id} />
      ))}
    </div>
  );
};

export default CarsList;
