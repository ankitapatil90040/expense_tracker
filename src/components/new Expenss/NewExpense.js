import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import React from "react";

const NewExpense = (props) => {
  const data = (recievedData) => {
    const expenseData = {
      ...recievedData,
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveData={data} />
    </div>
  );
};
export default NewExpense;
