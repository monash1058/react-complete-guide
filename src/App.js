import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import React, {useState} from "react";

const DUMMY_EXPENSE = [
  {
    id: 'e1',
    title: 'New Company',
    amount: 2020,
    date: new Date(2021, 2, 11),
   
  },
  {
    id: 'e2',
    title: 'New Company2',
    amount: 2050,
    date: new Date(2021, 3, 12),
  
  },
  {
    id: 'e3',
    title: 'New Company3',
    amount: 2060,
    date: new Date(2021, 4, 13),
   
  },
  {
    id: 'e4',
    title: 'New Company4',
    amount: 2100,
    date: new Date(2021, 5, 15),
   
  }
]
const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSE)
  const getExpenseData = (expense) => {
    setExpenses((prevExpenses) => {
            return [...prevExpenses, expense];
        });
  }
  return (
    <div>
    <NewExpense addExpense={getExpenseData}/>
     <Expenses items={expenses}
     />
    </div>
  );
}

export default App;
