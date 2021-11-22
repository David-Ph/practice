import React, { useState } from "react";

import CourseInput from "./components/CourseGoals/CourseInput/CourseInput";
import CourseList from "./components/CourseGoals/CourseList/CourseList";

import "./App.css";

function App() {
  const [goals, setGoals] = useState([
    { id: 1, text: "My First Goal" },
    { id: 2, text: "My Second Goal" },
  ]);

  const addGoalHandler = (goal) => {
    setGoals((prevState) => {
      return [goal, ...prevState];
    });
  };

  const deleteGoalHandler = (id) => {
    const newGoals = goals.filter((goal) => {
      return goal.id.toString() !== id.toString();
    });
    setGoals(newGoals);
  };

  let content = <p>No content yet. Maybe create a new one?</p>;

  if (goals.length > 0) {
    content = <CourseList goals={goals} onDelete={deleteGoalHandler} />;
  }

  return (
    <div>
      <section id="goal-form">
        <CourseInput onAddGoal={addGoalHandler} />
      </section>
      <section id="goals">
        {content}
        {/* <CourseList goals={goals} onDelete={deleteGoalHandler} /> */}
      </section>
    </div>
  );
}

export default App;
