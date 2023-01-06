
import styled from "styled-components";
import ExpenseItem from "./ExpenseItem"

const FormControl = styled.ul`

    list-style: none;
    padding: 0;
  
    & expenses-list__fallback {
        color: white;
        text-align: center;
    }
`;

const ExpensesList = (props) => {
    const {items} = props;
    if(items.length === 0) {
        return <p className="expenses-list__fallback">Found No expenses</p>
    }
    return (
        <>
            {/* <ul className="expenses-list"> */}
            <FormControl>
            {items?.map(expense => (
                <ExpenseItem 
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            ))}
            {/* </ul> */}
            </FormControl>
        </>
    )
}
export default ExpensesList;