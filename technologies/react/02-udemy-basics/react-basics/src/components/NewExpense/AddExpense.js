import React from "react";
import './NewExpense.css';
import "./ExpenseForm.css";


function AddExpense(props) {
  return <div>
      <div className="new-expense__actions add-expense">
        <button type="button" onClick={props.onClickButton}>Add New Expense</button>
      </div>
  </div>;
}

export default AddExpense;
