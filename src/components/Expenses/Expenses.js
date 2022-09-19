import { useState } from "react";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css'

const Expenses = (props) => {
  const [year, setYear] = useState('2020');

  // console.log(year);
 const filterExpenses = year => {
  setYear(year);
  props.onYearChange(year)
 }


// filters through the existing array passed from app.js and returns a new array of the expenses with the same year as the filter
 const filteredExpenses = props.data.filter( expense => {
  return expense.date.getFullYear().toString() === year;
 })

 let expensesContent = <p>No expenses found.</p>;   

 if (filteredExpenses.length > 0) {
  expensesContent = filteredExpenses.map((expense) => ( 
    <ExpenseItem 
      key={expense.id} 
      title={expense.title} 
      amount={expense.amount} 
      date={expense.date}
    />
  ));
 }

return(
  <Card className="expenses">
    <ExpenseFilter 
      selected={year} 
      onYearChange={filterExpenses}
    />
    {expensesContent}
  
    
    
  </Card>
)
}
export default Expenses;