import React from "react";

import Input from "../../UI/Input";

import classes from "./MealForm.module.css";

function MealForm(props) {
  return (
    <div>
      <form className={classes.form}>
        <Input
          label="Amount"
          input={{
            id: "amount_" + props.id,
            min: "1",
            max: "5",
            defaultValue: "1",
            type: "number",
          }}
        />
        <button>Add to Cart</button>
      </form>
    </div>
  );
}

export default MealForm;
