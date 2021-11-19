import React, {useState} from 'react';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";


const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

  const addExpenseHandler = (expense) => {
    // expenses is the array state from DUMMY_EXPENSES
    // expense is the new state that we got from calling this function
    // so what this basically means is, we set the new expenses state to be
    // the new expense at the first element, and the rest of the expenses 
    // as the next element
    // setExpenses([expense, ...expenses])
    setExpenses((prevState) => {
      return [expense, ...prevState];
    })
  }

  return (
    <div className="App">
      < NewExpense onAddExpense={addExpenseHandler} />
      < Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
