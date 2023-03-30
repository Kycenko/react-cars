import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FavouriteBlock.module.scss";
import CarsInFavourite from "../CarsInFavourite/CarsInFavourite.jsx";
import { useSelector } from "react-redux";

const FavouriteBlock = () => {
  const navigate = useNavigate();

  const cars = useSelector((state) => state.favourite.carsInFavourite);
  const navigateToFavourites = () => {
    navigate("/favourites");
  };

  return (
    <div className={styles.favourite_block}>
      <CarsInFavourite quantity={cars.length} />
      <img
        onClick={navigateToFavourites}
        src="/img/favorite-svgrepo-com.svg"
        className={styles.favourite_icon}
        alt=""
      />
      {/*<GrFavorite size={25} color="white" className={styles.favourite_icon} />*/}
    </div>
  );
};

export default FavouriteBlock;
