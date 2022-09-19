import { useState } from "react";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import './Expenses.css'
import ExpensesChart from "./ExpensesChart";
import ExpensesList from "./ExpensesList";

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
 

return(
  <Card className="expenses">
    <ExpenseFilter 
      selected={year} 
      onYearChange={filterExpenses}
    />
    <ExpensesChart expenses={filteredExpenses} />
    <ExpensesList data={filteredExpenses} />
  </Card>
)
}
export default Expenses;