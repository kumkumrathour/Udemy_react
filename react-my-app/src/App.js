

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
          date: new Date(2022,11,24)
        }
      ];
      
      const  App = () => {
            const [expenses, setExpenses] = useState(Dummy_Data);
          
        
      const addExpenseHandler =(expense)=>{
        console.log(expense);
        setExpenses([expense , ...expenses])
        console.log(expenses);
      }
      


        return (

          <div>
              <NewExpense onAddExpense={addExpenseHandler}/>
            <ExpenseAll items={expenses}/>
          </div>
        );
      }

export default App;
