import React ,{useState} from 'react'
import './ExpenseForm.css';
/**
* @author
* @function ExpenseForm
**/
const ExpenseForm = (props) => {
  const [enteredTitle,setEnteredTitle] = useState(''); // 컴포넌트 함수의 수명 주기와는 별개인 변수에 저장
  const [enteredAmount,setEnteredAmount] = useState('');
  const [enteredDate,setEnteredDate] = useState('');

//   const [userInput,setUserInput] = useState({
//     enteredTitle:'',
//     enteredAmount:'',
//     enteredDate:''
//   });

  const titleChangeHandler = (e)=>{
    // setUserInput = (prevState)=>{
    //     //동시에 수많은 상태 업데이트를 계획한다면 오래되었거나 잘못된 상태 스냅샷에 의존할 수 있으므로 아래와 같은 구문 사용
    //     return {...prevState,enteredTitle:e.target.value};
    // };

    // setUserInput({
    //     ...userInput,
    //     enteredTitle : e.target.value
    //     }
    //  );
     setEnteredTitle(e.target.value);
  };
  const amountChangeHandler = (e)=>{
    // setUserInput({
    //     ...userInput,
    //     enteredAmount : e.target.value;
    // })
     setEnteredAmount(e.target.value);
  };
  const dateChangeHandler = (e)=>{
    // setUserInput({
    //     ...userInput,
    //     enteredDate : e.target.value;
    // })
    setEnteredDate(e.target.value);
 };
  const submitHandler = (e) =>{
    e.preventDefault();
    const expenseData = {
      title : enteredTitle,
      amount : +enteredAmount,
      date : new Date(enteredDate)
    }
    props.onSaveExpenseData(expenseData);
    setEnteredAmount(''); 
    setEnteredDate('');
    setEnteredTitle('');
  };
  const cancelHandler = () =>{
    props.onStopEdit();
  };
  return(
    <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                {/* // 양방향 바인딩 : 상태를 업데이트하기 위해 입력에서 변경사항 수신하고 입력에 상태를 다시 보내줌 */}
                <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type="number" value={enteredAmount}onChange={amountChangeHandler} min='0.01' step='0.01'/>
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type="date" value={enteredDate}onChange={dateChangeHandler} min='2019-01-01' max='2022-12-31'/>
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type="button" onClick={cancelHandler}>Cancel</button>
            <button type="submit">Add Expense</button>
        </div>
    </form>
   )

 }
export default ExpenseForm;