import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css'

function ExpensesList(props) {

    // let expenseContent = <h3>No Expense Added!</h3>;
    //
    // if (props.items.length > 0) {
    //     expenseContent = props.items.map((expense) => (
    //         <ExpenseItem
    //             key={expense.id}
    //             title={expense.title}
    //             amount={expense.amount}
    //             date={expense.date}
    //         />
    //     ));
    // }

    if (props.items.length === 0) {
        return <h2 className="expense-list__fallback">Found No Expenses!</h2>
    }

    return <ul className="expense-list">
        {
            props.items.map((expense) => (
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            ))
        }
    </ul>
}

export default ExpensesList;