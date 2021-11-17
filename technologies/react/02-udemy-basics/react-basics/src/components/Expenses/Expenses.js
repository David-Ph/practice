import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";

function Expenses(props) {
  const expenses = [...props.expenses];
  const [filter, setFilter] = useState({
    year: 2021
  });

  const filterExpenseHandler = (filter) => {
    setFilter({ ...filter });
    console.log(filter);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filter.year} onFilterExpense={filterExpenseHandler} />

        {expenses.map((expense) => (
          <ExpenseItem expense={expense} />
        ))}
      </Card>
    </div>
  );
}

export default Expenses;
