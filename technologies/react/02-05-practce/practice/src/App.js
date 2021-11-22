import React, { useState } from "react";

import CourseInput from "./components/CourseGoals/CourseInput/CourseInput";

import "./App.css";

function App() {
  const [goals, setGoals] = useState([]);

  const addGoalHandler = (goal) => {
    setGoals((prevState) => {
      return [goal, ...prevState];
    });
    console.log(goals)
  };

  return (
    <div>
      <section id="goal-form">
        <CourseInput onAddGoal={addGoalHandler} />
      </section>
    </div>
  );
}

export default App;
