import React, {useState} from 'react'
import Card from './Card';
import  './Expense.css';
import ExpenseFilter from './ExpenseFilter';
import ExpensesList from './ExpenseList';

export default function (props) {
        const [filteredYears, setfilteredYears] = useState("2020");

        const filterChangeHandler = selectedYears => {
                setfilteredYears(selectedYears)
             }

        const filteredExpenses = props.items.filter(expense => {
            return expense.date.getFullYear().toString() === filteredYears;
        })

    return (
        <div>
            <Card className='expenses' >
            <ExpenseFilter 
            selected={filteredYears} 
            onFilterChange={filterChangeHandler}
             />
            
            <ExpensesList items={filteredExpenses} />
            </Card>
        </div>
         )}
