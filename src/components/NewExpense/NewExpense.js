import './NewExpense.css'
import ExpenseForm from './ExpenseForm'
import { useState } from 'react'


const NewExpense = (props) => {

  const [formOpen, setFormOpen] = useState(false)

  const saveExpenseDataHandler= (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData)
  }

  const toggleForm = (formOpen) => {
    setFormOpen(prevFormOpen => !prevFormOpen)
  }

  return(
    <div className='new-expense'>
      <button onClick={toggleForm}>Add New Expense</button>
      {
      formOpen && 
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={toggleForm}/>
      }
    </div>
  );
}

export default NewExpense;