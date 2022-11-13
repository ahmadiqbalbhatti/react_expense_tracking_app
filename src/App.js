// import logo from './logo.svg';
import "./App.css";

import Expenses from './componenets/Expenses/Expenses'
import NewExpense from "./componenets/NewExpense/NewExpense";
import {useState} from "react";

function App() {


    const DUMMY_EXPENSES = [
        {
            id: "e1",
            title: "Toilet paper",
            amount: "94.12",
            date: new Date(2020, 7, 14),
        },
        {
            id: "e2",
            title: "Car Insurance",
            amount: "267.12",
            date: new Date(2021, 2, 14),
        },
        {
            id: "e3",
            title: "New TV",
            amount: "788.89",
            date: new Date(2020, 6, 14),
        },
        {
            id: "e4",
            title: "New Desk (Wooden)",
            amount: "234.12",
            date: new Date(2021, 4, 21),
        },
    ];


    const [expenses, setExpenses] = useState(DUMMY_EXPENSES);


    const addExpenseHandler = (expense) => {
        setExpenses((prevExpenses) => {
            return [expense, ...prevExpenses];
        });
    };

    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler}/>
            <Expenses items={expenses}/>
        </div>
    );
}

export default App;
