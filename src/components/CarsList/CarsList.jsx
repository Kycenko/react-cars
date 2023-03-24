import React from 'react';
import CarsItem from "../CarsItem/CarsItem.jsx";

const CarsList = ({cars}) => {
  return (
    <div>
      {cars.map(car => <CarsItem car={car} key={car.id}/>)}
    </div>
  );
};

export default CarsList;