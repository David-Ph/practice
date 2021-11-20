import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import AddExpense from "./AddExpense";

const NewExpense = (props) => {
  const [addExpense, setAddExpense] = useState(false);

  const saveExpenseDataHandler = (formData) => {
    const expenseData = {
      ...formData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const clickButtonHandler = () => {
    if (addExpense) {
      setAddExpense(false);
    } else {
      setAddExpense(true);
    }
  };

  return (
    <div className="new-expense">
      {!addExpense && <AddExpense onClickButton={clickButtonHandler} />}
      {addExpense && (
        <ExpenseForm
          onCancelButton={clickButtonHandler}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
