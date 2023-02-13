import React ,{useState} from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
/**
* @author
* @function NewExpense
**/
const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) =>{
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  }
  const [isEditing,setIsEditing] = useState(false);

  const startEditingHandler = () => {
    setIsEditing(true);
  };
  const stopEditingHandler = () => {
    setIsEditing(false);
  };
  return(
    <div className="new-expense">
      {!isEditing && <button onClick ={startEditingHandler}>Add new Expense</button>}
      {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onStopEdit={stopEditingHandler}  /> }   {/* -> //포인터 전달(자식 -> 부모로 데이터를 넘기기 위해 / 반대는 props로) */}
    </div>
   )
  }
  export default NewExpense;