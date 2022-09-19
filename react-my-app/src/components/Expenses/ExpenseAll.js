import React ,{ useState } from'react';

import './ExpenseAll.css'
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card';
import ExpensesFilter from '../ExpenseFilter/ExpensesFilter';



const ExpenseAll = (props) =>{
          const[filteredYear ,setFilteredYear] =useState('2020');
         const filterChangeHandler =(selectedYear) =>{
          console.log(selectedYear)
         }
    return(
      <div>
        <ExpensesFilter
         selected={filteredYear} 
        onChangeFilter = {filterChangeHandler}/>
        <Card className="expenses">
          {
            props.items.map((expense)=> (
                <ExpenseItem 
                key ={expense.id}
                title={ expense.title}
                amount={ expense.amount}
                 date={ expense.date}
                 />
              )) }
       </Card>
       </div>
    );
}
export default ExpenseAll;
