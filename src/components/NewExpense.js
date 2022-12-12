import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const handleNewExpense = (data) => {
        const expenseData = {
            ...data,
            id: Math.random().toString()
        }
        props.onNewExpense(expenseData)
    }
  return (
    <div className='new-expense'>
      <ExpenseForm onExpenseForm={handleNewExpense}/>
    </div>
  );
};

export default NewExpense;