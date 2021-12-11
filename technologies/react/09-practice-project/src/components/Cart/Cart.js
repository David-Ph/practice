import React, { useContext } from "react";

import Modal from "../UI/Modal";
import CartContext from "../../contexts/cart-context";
import classes from "./Cart.module.css";

function Cart(props) {
  const CartCtx = useContext(CartContext);

  const totalAmount = `$${CartCtx.totalAmount.toFixed(2)}`;
  const hasItems = CartCtx.items.length > 0;

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {CartCtx.items.map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal onClick={props.onHideCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onHideCart} className={classes["button--alt"]}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
}

export default Cart;
