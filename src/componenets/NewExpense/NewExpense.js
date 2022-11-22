import ExpenseForm from "./ExpenseForm";
import styles from "./NewExpense.module.css";
import {useState} from "react";


function NewExpense(props) {
    const [isEditing, setIsEditing] = useState(false);

    const startEditingHandler = () => {
        setIsEditing(true);
    }

    const stopEditingHandler = () => {
        setIsEditing(false);
    }

    function saveExpenseDataHandler(enteredExpenseData) {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        };
        props.onAddExpense(expenseData);
        stopEditingHandler();
        // setIsEditing(false);
        // console.log(expenseData)
    }


    return (
        <div className={styles['new-expense']}>
            {!isEditing && (
                <button onClick={startEditingHandler}>Add New Expense</button>
            )}

            {isEditing && (
                <ExpenseForm
                    onSaveExpenseDate={saveExpenseDataHandler}
                    onCancel={stopEditingHandler}
                />
            )}

        </div>
    );
}

export default NewExpense;
