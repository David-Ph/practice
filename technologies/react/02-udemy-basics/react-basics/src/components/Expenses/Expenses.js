import React, { useState } from "react";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "../Chart/ExpensesChart";

function Expenses(props) {
  const expenses = [...props.expenses];
  const [filter, setFilter] = useState({
    year: 2021,
  });

  const filterExpenseHandler = (filter) => {
    setFilter({ ...filter });
    
  };

  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear() === parseInt(filter.year);
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filter.year}
          onFilterExpense={filterExpenseHandler}
        />
        < ExpensesChart expenses={filteredExpenses} />
        < ExpensesList expenses={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
