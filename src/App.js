// import logo from './logo.svg';
import "./App.css";

import Expenses from './componenets/Expenses/Expenses'
import NewExpense from "./componenets/NewExpense/NewExpense";

function App() {
  const expenses = [
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
      date: new Date(2020, 7, 14),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: "234.12",
      date: new Date(2021, 4, 21),
    },
  ];

  const addExpenseHandler = (expense) =>{
    console.log('In App.Js');
    console.log(expense);
  };

  return (
    <div>
      {/* <h2>Let's get started!</h2> */}
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expenses= {expenses}/>

      {/* <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      /> */}
    </div>
  );
}

export default App;
