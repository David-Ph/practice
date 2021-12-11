import React, { useContext } from "react";

import Modal from "../UI/Modal";
import CartContext from "../../contexts/cart-context";
import classes from "./Cart.module.css";

function Cart(props) {
  const CartCtx = useContext(CartContext);

  const cartItems = (
    <ul>
      {CartCtx.items.map((item) => (
        <li className={classes["cart-items"]}>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal onClick={props.onHideCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.66</span>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onHideCart} className={classes["button--alt"]}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
}

export default Cart;
