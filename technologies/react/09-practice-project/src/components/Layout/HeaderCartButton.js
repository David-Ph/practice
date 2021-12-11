import React, { useContext } from "react";

import CartIcon from "../Cart/CartIcon";
import CartContext from "../../contexts/cart-context";

import classes from "./HeaderCartButton.module.css";

function HeaderCartButton(props) {
  const CartCtx = useContext(CartContext);

  const totalItemsAmount = CartCtx.items.reduce((total, item) => {
    return total + item.amount;
  }, 0);

  return (
    <button onClick={props.onClick} className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{totalItemsAmount}</span>
    </button>
  );
}

export default HeaderCartButton;
