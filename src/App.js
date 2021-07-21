import React, {useState} from 'react'
import Expense from './components/Expense'
import NewExpense from './components/NewExpense/NewExpense'



  const DUMMY_EXPENSES = [
    {
      id: 'el1',
      title: 'Toilet Paper', 
      amount: 94.12,
      date: new Date(2020,7,14),
    },
    {
      id: 'el2',
      title: 'New TV', 
      amount: 799.48,
      date: new Date(2021,2,12),
    },
    {
      id:'el3',
      title:'Car Insurance',
      amount:294.67,
      date: new Date(2021,2,28),
    },
    {
      id:'el4',
      title:'New Desk',
      amount:450,
      date: new Date(2021,5,12),
    },
  ];
  
  const App = () => {
    const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  
    const addExpenseHandler = (expense) => {
      setExpenses((prevExpenses) => {
        return [expense, ...prevExpenses];
      });
    };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expense items={expenses} />
    </div>
  );
}

export default App;
