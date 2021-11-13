import './Expenses.css'
import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';

function Expenses(props){
    const expenses = [...props.expenses];
    return (
      <Card className="expenses">
        {expenses.map((expense) => (
          <ExpenseItem expense={expense} />
        ))}
      </Card>
    );
}

export default Expenses;