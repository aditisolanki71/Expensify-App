import React, { useState } from 'react';
import styled from "styled-components";
const ExpenseFormControls = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1rem;
  text-align: left;
`;

const ExpenseFormControl = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1rem;
  text-align: left;

& label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

& input {
  font: inherit;
  padding: 0.5rem;
  border-radius: 6px;
  border: 1px solid #ccc;
  width: 20rem;
  max-width: 100%;
}

&.new-expense__actions {
  text-align: right;
}

&.invalid input{
  border-color: red;
  background-color: lightpink;
}
&.invalid span{
  color: red;
}
&.invalid label{
  color:red;
}
`;
const ExpenseForm = (props) => {
  const [formData, setFormData] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: ""
  })
  const [isValid, setIsValid] = useState({
    title: true,
    amount: true,
    date: true
  })
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("formdata is",formData)

    console.log("len",formData.enteredDate.length);
    if (formData.enteredTitle.trim().length === 0) {
      setIsValid({ ...isValid, title: false });
      return;
    }
    else if (formData.enteredAmount.trim().length === 0) {
      setIsValid({ ...isValid, amount: false });
      return;
    }
    else if (formData.enteredDate.length <= 0) {
      console.log("Else if")
      setIsValid({ ...isValid, date: false });
      return;
    }
    console.log("adiit")
    const expenseData = {
      title: formData?.enteredTitle,
      amount: +formData?.enteredAmount ?? 0,
      date: new Date(formData?.enteredDate),
    };
    setIsValid({ title: true, amount: true, date: true });
    props.onExpenseForm(expenseData);
    setFormData({
      enteredTitle: "",
      enteredAmount: 0,
      enteredDate: ""
    })
   
  }

  console.log("isvaid",isValid)
  return (
    <form onSubmit={handleSubmit}>
      {/* <div className='new-expense__controls'> */}
      <ExpenseFormControls>
        {/* <div className={`new-expense__control ${!isValid.title ? "invalid" : ""}`}> */}
        <ExpenseFormControl>
        <label style={{ color: !isValid.title ? "red" : "black" }}>Title</label>
          {!isValid.title ? <span>Please enter title</span> : undefined}
          <br />
          <input
            name="title"
            type='text'
            value={formData.enteredTitle}
            onChange={e => {
              setFormData({ ...formData, enteredTitle: e.target.value })
              if(formData.enteredTitle.length > 0) {
                setIsValid({ ...isValid, title: true });
              }
            }}
          />

        {/* </div> */}
        </ExpenseFormControl>
        {/* <div className='new-expense__control'> */}
        <ExpenseFormControl>
          <label style={{ color: !isValid.amount ? "red" : "black" }}>Amount</label>
          {!isValid.amount ? <span style={{ color: !isValid.amount ? "red" : "black" }}>Please enter amount</span> : undefined}
          <br /> 
          <input
            style={{ borderColor: !isValid.amount ? "red" : "black" }}
            name="amount"
            type='number'
            min='0.01'
            step='0.01'
            value={formData.enteredAmount}
            onChange={e => {
              setFormData({ ...formData, enteredAmount: e.target.value })
              if(formData.enteredAmount.length > 0) {
                setIsValid({ ...isValid, amount: true });
              }
            }}
          />
        {/* </div> */}
        </ExpenseFormControl>
        {/* <div className='new-expense__control'> */}
        <ExpenseFormControl>
          <label style={{ color: !isValid.date ? "red" : "black" }}>Date</label>
          {!isValid.date ? <span style={{ color: !isValid.date ? "red" : "black" }}>Please enter Date</span> : undefined }
          <br />
          <input
          style={{ borderColor: !isValid.date ? "red" : "black" }}
            name="date"
            type='date'
            min='2019-01-01'
            max='2022-12-31'
            value={formData.enteredDate}
            onChange={e => {
              setFormData({ ...formData, enteredDate: e.target.value })
              if(formData.enteredDate.length > 0) {
                setIsValid({ ...isValid, date: true });
              }
            }}
          />
          </ExpenseFormControl>
        {/* </div> */}
      {/* </div> */}
      </ExpenseFormControls>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;