import React, {useState} from "react";

import Card from "./Card"
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
const Expenses = (props) => {
    const {expenses} = props;
    const [filteredYear, setFilteredYear] = useState("2020");
    const filterChangeHandler = selectedYear => {
        console.log("selected year",selectedYear)
        setFilteredYear(selectedYear);
        console.log("Expenses",expenses)
    }

    const filteredExpenses = expenses.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
      });

    console.log("1",expenses)
   
    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
            <ExpensesList items={filteredExpenses}/>
       </Card>
    )
}
export default Expenses;