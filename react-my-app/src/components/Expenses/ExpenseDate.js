// render a date on an expense
import './ExpenseDate.css'

const expenseDate=(props) =>{
    const day =props.date.toLocaleString('en-US',{day:'2-digit'});
      const month =props.date.toLocaleString('sn-US',{month:'long'});
      const year = props.date.getFullYear();
    //   var start = new Date(document.getElementById('Stardate').value);
    //   var year = start.getFullYear();

    return(
          <div className = "expense-date">
              <div className ="expense-date__month">{month}</div>
              <div  className="expense-date__year">{year}</div>
              <div className="expense-date__day">{day}</div>
           </div>
    )
}
export default expenseDate;