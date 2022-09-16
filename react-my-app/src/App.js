
import './App.css';
import ExpenseAll from './components/Expenses/ExpenseAll';
import NewExpense from './components/NewExpense/NewExpense';
// import expenseDate from './components/ExpenseDate';
import React from 'react';
const  App = () => {
  const expenseAll = [
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
    
  //  return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {} , "let get start"),
  //   React.createElement(ExpenseAll, { items:expenseAll})
  //  );
 const addExpenseHandler =(expense)=>{
   console.log(expense);
   console.log('In app.js')
 }


  return (

    <div>
        <NewExpense onAddExpense={addExpenseHandler}/>
      <ExpenseAll items={expenseAll}/>
    </div>
  );
}

export default App;
