import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
/**
* @author
* @function NewExpense
**/
const NewExpense = (props) => {
  return(
    <div className="new-expense">
        <ExpenseForm />
    </div>
   )
  }
  export default NewExpense;