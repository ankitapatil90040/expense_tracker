import React, { useState } from "react";

import "./ExpenseForm.css";
import "./NewExpense";

const ExpenseForm = (props) => {
  const [enteredTitle, setTitle] = useState(" ");
  const [enteredDate, setDate] = useState(" ");
  const [enteredAmount, setAmount] = useState(" ");

  const date = new Date(enteredDate);

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (
      enteredTitle !== "" &&
      enteredAmount > 0 &&
      enteredAmount !== " " &&
      date instanceof Date &&
      !isNaN(date.valueOf())
    ) {
      const expenseData = {
        title: enteredTitle,
        amount: enteredAmount,
        date: new Date(enteredDate),
        id: new Date().getTime().toString(),
      };

      props.onSaveData(expenseData);

      setTitle("");
      setAmount("");
      setDate("");
    } else {
      alert("Give a valid input");
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label> Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label> Amount</label>
          <input
            type="number"
            min="1"
            step="1"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label> Date </label>
          <input type="date" value={enteredDate} onChange={dateChangeHandler} />
        </div>
      </div>

      <div className="new-expense__action">
        <button type="submit"> Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
