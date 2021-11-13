import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";
import React, { useState } from "react";

function ExpenseItem(props) {
  // this is one of react hooks
  const [title, setTitle] = useState(props.expense.title);

  const clickHandler = () => {
    setTitle("Updated Title!");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.expense.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.expense.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
