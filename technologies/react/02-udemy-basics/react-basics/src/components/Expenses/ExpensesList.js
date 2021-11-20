import React from "react";
import "./ExpensesList.css";

import ExpenseItem from "./ExpenseItem";

function ExpensesList(props) {
  if (props.expenses.length === 0) {
    return <p className="expenses-list__fallback">No expenses on this year.</p>;
  }

  return (
    <ul className="expenses-list">
      {props.expenses.map((expense) => (
          <ExpenseItem key={expense.id} expense={expense} />
      ))}
    </ul>
  );
}

export default ExpensesList;
