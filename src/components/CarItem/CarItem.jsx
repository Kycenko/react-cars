import React from "react";
import styles from "./CarItem.module.scss";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCurrentCar } from "../../store/carsSlice.js";
import FavouriteCar from "../FavouriteCar/FavouriteCar.jsx";
import FavouriteBlock from "../FavouriteBlock/FavouriteBlock.jsx";

const CarItem = ({ car }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const moveToCarItem = () => {
    dispatch(setCurrentCar(car));
    navigate(`/car/${car.id}`);
  };
  return (
    <div>
      <div className={styles.item}>
        <div className={styles.image}>
          {<img className={styles.image} src={`${car.image}`} alt="" />}
        </div>
      </div>
      <div className={styles.info}>
        <h2>{car.title}</h2>
        <p>
          {new Intl.NumberFormat("ru-RU", {
            style: "currency",
            currency: "USD",
          }).format(car.price)}
        </p>
        {/*<Link className={styles.myLink} to={`/car/${car.id}`}>Read more</Link>*/}
        <button className={styles.myLink} onClick={moveToCarItem}>
          Read more
        </button>
        <FavouriteCar car={car} />
        <FavouriteBlock />
      </div>
    </div>
  );
};

export default CarItem;
