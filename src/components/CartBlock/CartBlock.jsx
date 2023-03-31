import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "./CartBlock.module.scss";
import CarsInCart from "../CarsInCart/CarsInCart.jsx";

const CartBlock = () => {
  const navigate = useNavigate();

  const cars = useSelector((state) => state.cart.carsInCart);
  const navigateToCart = () => {
    navigate("/cart");
  };

  return (
    <div className={styles.cart_block}>
      <CarsInCart quantity={cars.length} />
      <img
        onClick={navigateToCart}
        src="/img/shopping-cart-icon.svg"
        className={styles.cart_icon}
        alt=""
      />
    </div>
  );
};

export default CartBlock;
