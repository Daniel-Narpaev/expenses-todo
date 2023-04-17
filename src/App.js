import { useState } from "react";
import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/new-expenses/NewExpense";

function App() {
  const [expenses, setExpenses] = useState([
    {
      id:1 ,
      name: "watermelon",
      price:400,
      date: "2023-04-14"
    },
  ]);
  

  const addNewExpenseHandler = (data) => {
    const updateExpenses = [...expenses];
    updateExpenses.push(data);
    setExpenses(updateExpenses);

  }
  const deleteHandler = ( id )=> {
    const newData = expenses.filter((el)=> el.id !== id)
    setExpenses(newData) 
  }
  return (
    <div className="app">
     <NewExpense addNewExpenseHandler={addNewExpenseHandler}/>
     <Expenses expenses={expenses} onDelete={deleteHandler} />
    </div>
  );
}

export default App;
