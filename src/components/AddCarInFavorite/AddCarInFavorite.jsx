import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCarInFavourite,
  setCarInFavourite,
} from "../../store/favouriteSlice.js";
import styles from "./AddCarInFavorite.module.scss";

const AddCarInFavorite = ({ car }) => {
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
    <div className={styles.buttons}>
      {isCarInFavourite ? (
        <img
          className={styles.icon}
          onClick={handleClick}
          src="/public/img/remove-from-favorites-icon.svg"
          alt=""
        />
      ) : (
        <img
          className={styles.icon}
          onClick={handleClick}
          src="/public/img/add-to-favorites-icon.svg"
          alt=""
        />
      )}
    </div>
  );
};

export default AddCarInFavorite;
