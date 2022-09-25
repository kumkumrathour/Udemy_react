import React from 'react';
import './NewExpense.css';

import ExpenseForm from './ExpenseForm';



const NewExpense = (props) => {
  const onSaveExpenseDataHandler =(enteredExpenseData) =>{
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
   console.log(expenseData) ;
  props.onAddExpense(expenseData);
  
  }
 return (
           <div className = "new-expense">
            <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} />
          </div>
          )
       };
export default NewExpense;

// onsaveexpensedata ka funcrtion new Expernce jo ki parent file ha usme banaya ha
// usko hamne (onsaveExpenseData ko ) expensefoem ma call kya ha jo ke chilf file ha
// us me expensedata as a paramerter pas ker dya ha newExpense file ma Onsaveexpensedata
// ko function banaya ha or paramerter pas ki ha jo ki save value la rha ha enpensedata vale
