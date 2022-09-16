import ExpenseItem ,{useState}from "./ExpenseItem";
import './ExpenseAll.css'
import Card from '../UI/Card';
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";


const ExpenseAll = (props) =>{
          const [filteredYear,setFilterYear] =useState('2020')

         const expensesFilterHandler = (selectedYear)=>{
          setFilterYear(selectedYear);
         }
    return(
      <div>
        <ExpensesFilter selected = {filteredYear} onChangeFilter={expensesFilterHandler}/>
        <Card className="expenseAll">
         <ExpenseItem 
        title={props.items[0].title}
        amount={props.items[0].amount}
         date={props.items[0].date}
         />
        <ExpenseItem
         title={props.items[1].title}
         amount={props.items[1].amount}
          date={props.items[1].date}
        />
        <ExpenseItem
         title={props.items[2].title}
         amount={props.items[2].amount}
          date={props.items[2].date}
        />
        <ExpenseItem
         title={props.items[3].title}
         amount={props.items[3].amount}
          date={props.items[3].date}
        />
       </Card>
       </div>
    );
}
export default ExpenseAll;