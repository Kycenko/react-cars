import React from "react";
import FavouriteBlock from "../FavouriteBlock/FavouriteBlock.jsx";
import styles from "./NavBar.module.scss";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className={styles.navBar}>
      <div className={styles.wrapper}>
        <Link to="/">
          <img
            className={styles.logo}
            src="/img/auto-shop-1-logo-svg-vector.svg"
            alt=""
          />
        </Link>
      </div>
      <div className={styles.favourite_wrapper}>
        <FavouriteBlock />
      </div>
    </div>
  );
};

export default NavBar;
