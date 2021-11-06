import './Expenses.css'
import ExpenseItem from "./ExpenseItem";

function Expenses(props){
    const expenses = [...props.expenses];
    console.log(expenses);
    return (
      <div className="expenses">
        {expenses.map((expense) => (
          <ExpenseItem expense={expense} />
        ))}
      </div>
    );
}

export default Expenses;