import React, { useRef, useState } from "react";

import Input from "../../UI/Input";

import classes from "./MealForm.module.css";

function MealForm(props) {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountRef.current.value;
    const amount = +enteredAmount;

    if (enteredAmount.trim().length === 0) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(amount);
  };

  return (
      <form className={classes.form} onSubmit={submitHandler}>
        <Input
          ref={amountRef}
          label="Amount"
          input={{
            id: "amount_" + props.id,
            min: "1",
            max: "5",
            defaultValue: "1",
            type: "number",
          }}
        />
        <button type="submit">Add to Cart</button>
        {!amountIsValid && <p>Invalid Amount</p> }
      </form>
  );
}

export default MealForm;
