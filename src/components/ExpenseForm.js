import React,{ useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [formData,setFormData] = useState({
        enteredTitle:"",
        enteredAmount:"",
        enteredDate:""
    })
    const handleSubmit = (e) => {
        e.preventDefault();
        const expenseData = {
            title: formData?.enteredTitle,
            amount: formData?.enteredAmount,
            date: new Date(formData?.enteredDate),
          };
          props.onExpenseForm(expenseData);
          setFormData({ 
            enteredTitle:"",
            enteredAmount:"",
            enteredDate:""
        })
    }

  return (
    <form onSubmit={handleSubmit}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input  
            name="title"
            type='text'
            value={formData.enteredTitle}
            //onChange={changeHandler} 
            onChange={e => setFormData({...formData, enteredTitle: e.target.value})}
        />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input 
            name="amount"
            type='number' 
            min='0.01' 
            step='0.01'
            value={formData.enteredAmount}
            onChange={e => setFormData({...formData,enteredAmount: e.target.value})}
            //onChange={changeHandler} 
         />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input 
            name="date"
            type='date' 
            min='2019-01-01' 
            max='2022-12-31' 
            value={formData.enteredDate}
            onChange={e => setFormData({...formData, enteredDate: e.target.value})}
            //onChange={changeHandler} 
        />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;