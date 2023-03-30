import React from "react";
import styles from "./CarsInFavourite.module.scss";

const CarsInFavourite = ({ quantity = 0 }) => {
  return quantity > 0 ? (
    <div className={styles.cars_in_favourite}>{quantity}</div>
  ) : null;
};

export default CarsInFavourite;
