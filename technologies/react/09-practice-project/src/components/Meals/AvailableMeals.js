import React from "react";

import { DUMMY_MEALS } from "./DummyMeals";
import Card from "../UI/Card";

import classes from "./AvailableMeals.module.css";

function AvailableMeals() {
  const mealsList = DUMMY_MEALS.map((meal) => {
    return <li>{meal.name}</li>;
  });

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
}

export default AvailableMeals;
