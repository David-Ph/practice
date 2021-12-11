import React, { useContext } from "react";

import CartItem from "./CartItem";

import Modal from "../UI/Modal";
import CartContext from "../../contexts/cart-context";
import classes from "./Cart.module.css";

function Cart(props) {
  const CartCtx = useContext(CartContext);
  console.log(CartCtx.items);
  const totalAmount = `$${CartCtx.totalAmount.toFixed(2)}`;
  const hasItems = CartCtx.items.length > 0;

  const addHandler = (item) => {
    CartCtx.addItem({ ...item, amount: 1 });
  };

  const removeHandler = (id) => {
    CartCtx.removeItem(id);
  };

  return (
    <Modal onClick={props.onHideCart}>
      <ul className={classes["cart-items"]}>
        {CartCtx.items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onAdd={addHandler.bind(null, item)}
            onRemove={removeHandler.bind(null, item.id)}
          />
        ))}
      </ul>
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
