

import './App.css';
import ExpenseAll from './components/Expenses/ExpenseAll';
import NewExpense from './components/NewExpense/NewExpense';
// import expenseDate from './components/ExpenseDate';
import React , { useState } from 'react';
const Dummy_Data = [
          {
              id:'e1',
              title:'Car Insurance',
            amount:233.4 ,
            date: new Date(2021,2,34)
          },
        {
            id :'e2',
            title:'bike Insurance',
          amount:833.4,
          date: new Date(1996,11,24)
        },
        {
            id:'e3',
            title:'cycle Insurance',
          amount:768.4,
          date: new Date(2008,8,15)
        },
        {
            id:'e4',
            title:'airoplane Insurance',
          amount:87.4,
          date: new Date(2012,5,17)
        },
      ];
      const  App = () => {
            const [expenses, setExpenses] =useState(Dummy_Data);
          
        
      const addExpenseHandler =(expense)=>{
        setExpenses((updatedExpense)=>{
          return [expense,...updatedExpense]
        })
      }


        return (

          <div>
              <NewExpense onAddExpense={addExpenseHandler}/>
            <ExpenseAll items={expenses}/>
          </div>
        );
      }

export default App;
