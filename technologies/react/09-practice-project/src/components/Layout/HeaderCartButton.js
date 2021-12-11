import React, {useContext} from "react";

import CartIcon from "../Cart/CartIcon";
import CartContext from "../../contexts/cart-context";

import classes from "./HeaderCartButton.module.css";

function HeaderCartButton(props) {
  const CartCtx = useContext(CartContext)

  return (
    <button onClick={props.onClick} className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{CartCtx.totalAmount}</span>
    </button>
  );
}

export default HeaderCartButton;
