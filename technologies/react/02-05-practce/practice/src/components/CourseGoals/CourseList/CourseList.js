import React from "react";

import CourseItem from "../CourseItem/CourseItem";

import "./CourseList.css";

function CourseList(props) {
  return (
    <ul className="goal-list">
      {props.goals.map((goal) => {
        return (
          <CourseItem id={goal.id} onDelete={props.onDelete} key={goal.id}>
            {goal.text}
          </CourseItem>
        );
      })}
    </ul>
  );
}

export default CourseList;
