import styles from'./ExpenseDate.module.css';

function ExpenseDate(props) {
    const month = props.date.toLocaleString("en-US", {month: "long"});
//   const year = props.date.toLocaleString("en-US", { year: "numeric" });
    const year = props.date.getFullYear();
    const day = props.date.toLocaleString("en-US", {day: "numeric"});
    return (
        <div className={styles['expense-date']}>
            <div className={styles['expense-date__month']}>{month}</div>
            <div className={styles['expense-date__year']}>{year}</div>
            <div className={styles['expense-date__day']}>{day}</div>
        </div>
    );
}

export default ExpenseDate;