import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCarInFavourite,
  setCarInFavourite,
} from "../../store/favouriteSlice.js";
import styles from "./FavouriteCar.module.scss";

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
      <button className={styles.button} onClick={handleClick}>
        {isCarInFavourite ? "UnLike" : "Like"}
      </button>
    </div>
  );
};

export default FavouriteCar;
