import React from "react";
import FavouriteBlock from "../FavouriteBlock/FavouriteBlock.jsx";
import styles from "./NavBar.module.scss";
import { Link } from "react-router-dom";
import CartBlock from "../CartBlock/CartBlock.jsx";

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
      <div className={styles.cart_wrapper}>
        <CartBlock />
      </div>
    </div>
  );
};

export default NavBar;
