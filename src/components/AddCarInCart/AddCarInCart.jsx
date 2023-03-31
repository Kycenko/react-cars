import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCarInCart, setCarInCart } from "../../store/cartSlice.js";
import styles from "../AddCarInFavorite/AddCarInFavorite.module.scss";

const AddCarInCart = ({ car }) => {
  const dispatch = useDispatch();
  const cars = useSelector((state) => state.cart.carsInCart);
  const isCarInCart = cars.some((item) => item.id === car.id);

  const handleClick = (e) => {
    e.stopPropagation();
    if (isCarInCart) {
      dispatch(deleteCarInCart(car.id));
    } else {
      dispatch(setCarInCart(car));
    }
  };

  return (
    <div className={styles.buttons}>
      {isCarInCart ? (
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

export default AddCarInCart;
