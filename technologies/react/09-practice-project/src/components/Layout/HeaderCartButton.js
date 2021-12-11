import React, { useContext, useEffect, useState } from "react";

import CartIcon from "../Cart/CartIcon";
import CartContext from "../../contexts/cart-context";

import classes from "./HeaderCartButton.module.css";

function HeaderCartButton(props) {
  const [buttonIsLighted, setButtonIsLighted] = useState(false);
  const CartCtx = useContext(CartContext);
  const { items } = CartCtx;

  const totalItemsAmount = CartCtx.items.reduce((total, item) => {
    return total + item.amount;
  }, 0);

  const buttonClasses = `${classes.button} ${
    buttonIsLighted ? classes.bump : ""
  }`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }

    setButtonIsLighted(true);
    const timer = setTimeout(() => {
      setButtonIsLighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button onClick={props.onClick} className={buttonClasses}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{totalItemsAmount}</span>
    </button>
  );
}

export default HeaderCartButton;
