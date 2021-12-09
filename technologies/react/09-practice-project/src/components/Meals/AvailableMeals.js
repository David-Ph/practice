import React from "react";

import {DUMMY_MEALS} from "./DummyMeals";

import classes from "./AvailableMeals.module.css";

function AvailableMeals() {
    console.log(DUMMY_MEALS);
    const mealsList = DUMMY_MEALS.map((meal) => {
        return <li>{meal.name}</li>
    })

  return <section className={classes.meals}>
      <ul>
          {mealsList}
      </ul>
  </section>;
}

export default AvailableMeals;
