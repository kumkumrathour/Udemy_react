import React ,{ useState } from'react';
import './ExpenseAll.css'
import ExpensesList from './ExpensesList';
import Card from '../UI/Card';
import ExpensesFilter from '../ExpenseFilter/ExpensesFilter';



const ExpenseAll = (props) =>{
          const[filteredYear ,setFilteredYear] =useState('2020');
          const filterChangeHandler = (selectedYear) =>{
            setFilteredYear(selectedYear)
          };
           const filteredExpenses = props.items.filter(expense =>{
            return expense.date.getFullYear().toString() === filteredYear;
           }
           );
           
    return(
      <div>
       
        <Card className="expenses">
        <ExpensesFilter
         selected={filteredYear} 
        onChangeFilter = {filterChangeHandler}
        />
         <ExpensesList items={filteredExpenses}/>
         
       </Card>
       </div>
    );
}
export default ExpenseAll;
