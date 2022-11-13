import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";


function NewExpense(props) {
    // const onSaveExpenseDataHandler = enteredExpenseData => {
    //   const expenseData = {
    //     ...enteredExpenseData,
    //     id: Math.random().toString(),
    //   };
    //   // console.log(expenseData)
    //   props.onAddExpense(expenseData);
    // };

    function saveExpenseDataHandler(enteredExpenseData) {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        };
        props.onAddExpense(expenseData);
        console.log(expenseData)
    }

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseDate={saveExpenseDataHandler}/>
        </div>
    );
}

export default NewExpense;
