import Card from "../UI/Card";

import styles from './Expenses.module.css'
import ExpenseFilter from "./ExpenseFilter";
import {useState} from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('all');

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }

    const filteredExpense = props.items.filter(expense => {
        if (filteredYear ==="all") {
            return expense;
        }
        return expense.date.getFullYear().toString() === filteredYear;
    });
    //
    // let expenseContent = <h3>No Expense Added!</h3>;
    //
    // if (filteredExpense.length > 0){
    //     expenseContent = filteredExpense.map((expense) => (
    //         <ExpenseItem
    //             key={expense.id}
    //             title={expense.title}
    //             amount={expense.amount}
    //             date={expense.date}
    //         />
    //     ));
    // }

    return (
        <div>
            <Card className={styles["expenses"]}>
                <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>

                {/*{expenseContent}*/}

                <ExpensesChart expenses={filteredExpense}/>
                <ExpensesList items={filteredExpense}/>

                {/*/!* It's a simple trick for using turner operator*!/*/}
                {/*{filteredExpense.length === 0 && <h3>No Expense Added!</h3>}*/}
                {/*{filteredExpense.length > 0 &&*/}
                {/*    filteredExpense.map((expense) => (*/}
                {/*        <ExpenseItem*/}
                {/*            key={expense.id}*/}
                {/*            title={expense.title}*/}
                {/*            amount={expense.amount}*/}
                {/*            date={expense.date}*/}
                {/*        />*/}
                {/*    ))*/}
                {/*}*/}

                {/* This is Little Complex then above*/}
                {/*{*/}
                {/*    filteredExpense.length === 0 ? <h2>No Expense Added!</h2> :*/}
                {/*        filteredExpense.map((expense) => (*/}
                {/*            <ExpenseItem*/}
                {/*                key={expense.id}*/}
                {/*                title={expense.title}*/}
                {/*                amount={expense.amount}*/}
                {/*                date={expense.date}*/}
                {/*            />*/}
                {/*        ))*/}
                {/*}*/}
            </Card>
        </div>
    );
}


export default Expenses