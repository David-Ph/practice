import React, { useState } from "react";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";

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
        {/* If filteredExpenses is true, render the 2nd expression */}
        {/* {filteredExpenses.length === 0 && <p>No expenses on this year.</p>} */}
        < ExpensesList expenses={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
