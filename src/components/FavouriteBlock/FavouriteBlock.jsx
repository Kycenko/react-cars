import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FavouriteBlock.module.scss";
import CarsInFavourite from "../CarsInFavourite/CarsInFavourite.jsx";
import { useSelector } from "react-redux";
import { FcLike } from "react-icons/fc";

const FavouriteBlock = () => {
  const navigate = useNavigate();
  const cars = useSelector((state) => state.favourite.carsInFavourite);
  return (
    <div className={styles.main}>
      <CarsInFavourite quantity={cars.length} />
      <FcLike size={25} />
    </div>
  );
};

export default FavouriteBlock;
