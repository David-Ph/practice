import React, { useContext } from "react";

import MealForm from "./MealForm";
import CartContext from "../../../contexts/cart-context";

import classes from "./MealItem.module.css";

function MealItem(props) {
  const CartCtx = useContext(CartContext);
  const price = `$${props.meal.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    const newCartItem = {
      id: props.meal.id,
      name: props.meal.name,
      price: props.meal.price,
      amount: amount,
    };
    CartCtx.addItem(newCartItem);
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.meal.name}</h3>
        <p className={classes.description}>{props.meal.description}</p>
        <p className={classes.price}>{price}</p>
      </div>
      <div>
        <MealForm id={props.meal.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
}

export default MealItem;
