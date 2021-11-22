import React, { useState } from "react";

import CourseInput from "./components/CourseGoals/CourseInput/CourseInput";
import CourseList from "./components/CourseGoals/CourseList/CourseList";

import "./App.css";

function App() {
  const [goals, setGoals] = useState([
    {id: 1, text: "My First Goal"},
    {id: 2, text: "My Second Goal"}

  ]);

  const addGoalHandler = (goal) => {
    setGoals((prevState) => {
      return [goal, ...prevState];
    });
  };

  return (
    <div>
      <section id="goal-form">
        <CourseInput onAddGoal={addGoalHandler} />
      </section>
      <section id="goals">
        < CourseList goals={goals} />
      </section>
    </div>
  );
}

export default App;
