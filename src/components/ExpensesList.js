
import ExpenseItem from "./ExpenseItem"
import "./ExpensesList.css"
const ExpensesList = (props) => {
    const {items} = props;
    if(items.length === 0) {
        return <p className="expenses-list__fallback">Found No expenses</p>
    }
    return (
        <>
            <ul className="expenses-list">
            {items?.map(expense => (
                <ExpenseItem 
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            ))}
            </ul>
        </>
    )
}
export default ExpensesList;