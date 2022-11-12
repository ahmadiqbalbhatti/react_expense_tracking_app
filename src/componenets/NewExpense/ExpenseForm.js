import React, { useState } from "react";

import "./ExpenseForm.css";

function ExpenseForm(props) {
  // // This is the most simple and common use of userState
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // // This is use to manage multiple states at the same time
  // const [userInput, setUserInput] = userState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  const titleChangeHandler = (event) => {
    // // This is the most simple and common use of userState
    setEnteredTitle(event.target.value);
    // // This is use to manage multiple states at the same time
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
    // // Third Way of managing state to avoid errors that react do while schedualing so be awair of it
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };
  const amountChangeHandler = (event) => {
    // // This is the most simple and common use of userState
    setEnteredAmount(event.target.value);
    // // This is use to manage multiple states at the same time
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
    // // Third Way of managing state to avoid errors that react do while schedualing so be awair of it
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredAmount: event.target.value };
    // });
  };
  const dateChangeHandler = (event) => {
    // // This is the most simple and common use of userState
    setEnteredDate(event.target.value);
    // // This is use to manage multiple states at the same time
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
    // // Third Way of managing state to avoid errors that react do while schedualing so be awair of it
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredDate: event.target.value };
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseDate(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');

    // props.saveExpenseDataHandler(expenseData);
    // console.log(expenseData);
    // setEnteredTitle("");
    // setEnteredAmount("");
    // setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            // max="0.99"
            step="any"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2020-01-01"
            max="2025-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
}

export default ExpenseForm;
