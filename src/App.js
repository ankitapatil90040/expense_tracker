// import ExpenseItem from "./components/ExpenseItem";
import React, { useState, useEffect } from "react";
import ExpenseItem from "./components/ExpenseItem";
// import Expenses from "./components/Expenses";
import NewExpense from "./components/new Expenss/NewExpense";
import "./App.css";

let dummy_expense = localStorage.getItem("expenses")
  ? JSON.parse(localStorage.getItem("expenses"))
  : [];

function App() {
  const [expenses, setExpenses] = useState(dummy_expense);

  const addExpenseHandler = (expense) => {
    const updatedExpense = [expense, ...expenses];
    setExpenses(updatedExpense);
  };

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const newList = (id) => {
    setExpenses(Object.values(expenses).filter((prop) => prop.id !== id));
  };

  const deleteAllHandler = () => {
    setExpenses([]);
  };

  const total = expenses.reduce((accumulator, currentValue) => {
    return (accumulator += parseInt(currentValue.amount));
  }, 0);

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <div>
        <p>
          <span className="total">Total:- &#8377;{total}</span>
        </p>
      </div>

      <div className="expenses">
        {expenses.map((expense) => (
          <ExpenseItem
            id={expense.id}
            date={expense.date}
            title={expense.title}
            amount={expense.amount}
            deleteProductProp={newList}
          />
        ))}
      </div>
      <button className="deleteAll-btn" onClick={deleteAllHandler}>
        Delete All{" "}
      </button>
    </div>
  );
}

export default App;
