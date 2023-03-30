import React from "react";
import styles from "./CarItem.module.scss";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCurrentCar } from "../../store/carsSlice.js";
import FavouriteCar from "../FavouriteCar/FavouriteCar.jsx";

const CarItem = ({ car }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const moveToCarItem = () => {
    dispatch(setCurrentCar(car));
    navigate(`/car/${car.id}`);
  };
  return (
    <div className={styles.product_item}>
      {<img src={`${car.image}`} alt="" />}
      <div className={styles.product_list}>
        <h3>{car.title}</h3>
        <span className={styles.price}>
          {new Intl.NumberFormat("ru-RU", {
            style: "currency",
            currency: "USD",
          }).format(car.price)}
        </span>
        <div className={styles.buttons}>
          <button className={styles.button} onClick={moveToCarItem}>
            Read more
          </button>
          <FavouriteCar car={car} />
        </div>
      </div>
    </div>
  );
};

export default CarItem;
