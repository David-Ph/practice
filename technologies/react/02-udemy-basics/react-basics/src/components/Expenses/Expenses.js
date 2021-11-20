import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";

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

  // alternative way to do conditional rendering
  let expensesContent = <p>No expenses on this year.</p>
  if(filteredExpenses > 0){
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem key={expense.id} expense={expense} />
    )) 
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filter.year}
          onFilterExpense={filterExpenseHandler}
        />
        {/* If filteredExpenses is true, render the 2nd expression */}
        {/* {filteredExpenses.length === 0 && <p>No expenses on this year.</p>} */}
        {expensesContent}
      </Card>
    </div>
  );
}

export default Expenses;
