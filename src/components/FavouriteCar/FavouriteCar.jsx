import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCarInFavourite,
  setCarInFavourite,
} from "../../store/favouriteSlice.js";

const FavouriteCar = ({ car }) => {
  const dispatch = useDispatch();
  const cars = useSelector((state) => state.favourite.carsInFavourite);
  const isCarInFavourite = cars.some((item) => item.id === car.id);

  const handleClick = (e) => {
    e.stopPropagation();
    if (isCarInFavourite) {
      dispatch(deleteCarInFavourite(car.id));
    } else {
      dispatch(setCarInFavourite(car));
    }
  };
  return (
    <div>
      <div>
        <button onClick={handleClick}>
          {isCarInFavourite ? "UnLike" : "Like"}
        </button>
      </div>
    </div>
  );
};

export default FavouriteCar;
