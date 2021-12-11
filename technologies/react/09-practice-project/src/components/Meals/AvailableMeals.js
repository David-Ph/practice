import React from "react";

import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

import { DUMMY_MEALS } from "./DummyMeals";
import classes from "./AvailableMeals.module.css";

function AvailableMeals() {
  const mealsList = DUMMY_MEALS.map((meal) => {
    return < MealItem key={meal.id} meal={meal} />;
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
