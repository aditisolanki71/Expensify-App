import React from "react";
import ExpenseItem from "./ExpenseItem"
import "./Expenses.css";
const Expenses = (props) => {
    const {expenses} = props;
    console.log("1",expenses)
    return (
        <ul className="expenses">
            {expenses?.map(expense => (
                <ExpenseItem 
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                >
                </ExpenseItem>
            ))}
       </ul>
    )
}
export default Expenses;