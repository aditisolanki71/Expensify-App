import React, {useState} from "react";
import styles from "./Expenses.module.css"
import Card from "../UI/Card"
// import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";
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

    
    return (
        <Card className={styles.expenses}>
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
            <ExpensesChart expenses={filteredExpenses}/>
            <ExpensesList items={filteredExpenses}/>
       </Card>
    )
}
export default Expenses;