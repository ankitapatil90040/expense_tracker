import "./ExpenseItem.css"
import  "./ExpenseDate";
import ExpenseDate from "./ExpenseDate";


function ExpenseItem(props,)
{
  const handleRemove=(id)=>
  {
   props.deleteProductProp(id);
  }

  return (
    <div className="expense-item" >
      <ExpenseDate date={new Date(props.date)}/>
      <div className="expense-item__description">
           <h2>{props.title}</h2>
      </div>
      <div className="expense-item__price">
          {props.amount}
      </div>
      <button className="delete-btn" onClick={()=>handleRemove(props.id)}>Delete</button>
      </div>
  );
}


export default ExpenseItem;


