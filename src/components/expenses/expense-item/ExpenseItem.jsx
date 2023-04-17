import React from "react";
import "./ExpenseItem.css";
import { TiDelete } from "react-icons/ti";
const ExpenseItem = ({ name, price, onDelete, date, item }) => {
  return (
    <div className="listItem">
      <div className="listItemBlock">
        <TiDelete className="delete" onClick={() => onDelete(item.id)} />
        <span className="date">{date}</span>
        <p className="objectName">{name}</p>
      </div>

      <span className="price">{price} SOM</span>
    </div>
  );
};

export default ExpenseItem;
