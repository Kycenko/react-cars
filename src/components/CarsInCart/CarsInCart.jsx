import React from "react";
import styles from "./CarsInCart.module.scss";

const CarsInCart = ({ quantity = 0 }) => {
  return quantity > 0 ? (
    <div className={styles.cars_in_cart}>{quantity}</div>
  ) : null;
};

export default CarsInCart;
