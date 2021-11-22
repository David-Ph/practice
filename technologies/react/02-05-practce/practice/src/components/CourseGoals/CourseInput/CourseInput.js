import React, { useState } from "react";

import Button from "../../UI/Button/Button";

import "./CourseInput.css";

function CourseInput(props) {
  const [goal, setGoal] = useState("");

  const inputGoalHandler = (event) => {
    setGoal(event.target.value);
  };

  const submitGoalHandler = (event) => {
    event.preventDefault();
    props.onAddGoal({
        id: Math.random().toString(),
        text: goal,
    });
    setGoal("");
  };

  return (
    <form onSubmit={submitGoalHandler}>
      <div className="form-control">
        <label>Course Goal</label>
        <input type="text" value={goal} onChange={inputGoalHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
}

export default CourseInput;
