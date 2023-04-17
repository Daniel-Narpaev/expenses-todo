import React, { useState } from "react";
import Input from "../UI/input/Input";
import "./Form.css";
import Button from "../UI/button/Button";
const NewExpense = ({ addNewExpenseHandler }) => {
  const [showForm, setShowForm] = useState(true);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");

  const ShowFormHandler = () => {
    setShowForm((prevState) => !prevState);
  };
  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };
  const priceChangeHandler = (event) => {
    setPrice(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };
  const saveHandler = (event) => {
    event.preventDefault();
    const dataList = {
      id: Math.random().toString(),
      name: name,
      price: price,
      date: date,
    };
    addNewExpenseHandler(dataList);
    setDate("");
    setName("");
    setPrice("");
  };

  return (
    <div className="form">
      {showForm === true ? (
        <div className="addExpense">
          <Button onClick={ShowFormHandler} title="Добавить новый  расходы" />
        </div>
      ) : (
        <>
          <div className="inputBox">
            <Input
              value={name}
              onChange={nameChangeHandler}
              type="text"
              title="Заголовок"
            />
            <Input
              value={price}
              onChange={priceChangeHandler}
              type="number"
              title="Цена"
              marginLeft="20px"
            />
            <Input
              value={date}
              onChange={dateChangeHandler}
              type="date"
              title="Дата"
            />
          </div>

          <div className="btnBox">
            <Button
              title="Отмена"
              marginright="20px"
              onClick={ShowFormHandler}
            />
            <Button
              disabled={!date}
              title="Добавить расход"
              onClick={saveHandler}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default NewExpense;
