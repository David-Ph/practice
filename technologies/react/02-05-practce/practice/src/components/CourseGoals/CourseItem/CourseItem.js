import React from "react";

import "./CourseItem.css";

function CourseItem(props) {
  const onClickHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <li className="goal-item" onClick={onClickHandler}>
      {props.children}
    </li>
  );
}

export default CourseItem;
