import ExpenseItem from "./ExpenseItem";
import styles from './ExpensesList.module.css'

function ExpensesList(props) {

    if (props.items.length === 0) {
        return <h2 className={styles["expense-list__fallback"]}>Found No Expenses!</h2>
    }

    return <ul className={styles["expense-list"]}>
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