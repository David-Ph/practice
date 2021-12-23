import { useState, useEffect } from "react";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(undefined);

  useEffect(() => {
    const fetchMeals = async () => {
      setIsLoading(true);

      const response = await fetch(
        "https://learn-react-c51fe-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();

      const loadedMeals = [];

      for (const key in data) {
        loadedMeals.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
        });
      }

      const transformedMeals = loadedMeals.map((movieData) => {
        return {
          id: movieData.id,
          name: movieData.name,
          description: movieData.description,
          price: movieData.price,
        };
      });
      setMeals(transformedMeals);
      setIsLoading(false);
    };

    // because fetchmeals returns a promise
    // we can't just use try catch to catch errors
    // but we can use catch
    fetchMeals().catch((error) => {
      setIsLoading(false);
      setError(error.message);
    });
  }, []);

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  if (isLoading) {
    return (
      <section className={classes.meals}>
        <Card>
          <img
            src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif"
            alt="Loading..."
          />
        </Card>
      </section>
    );
  }

  if (error) {
    return (
      <section className={classes.meals}>
        <Card>
          <p>{error}</p>
        </Card>
      </section>
    );
  }

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
