import React, { useState } from "react";
import Input from "../UI/input/Input";
import Button from "../UI/button/Button";
import styled from "styled-components";
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
    <Form>
      {showForm === true ? (
        <AddExpense>
          <Button onClick={ShowFormHandler} title="Добавить новый  расходы" />
        </AddExpense>
      ) : (
        <>
          <InputBox>
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
          </InputBox>

          <BtnBox>
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
          </BtnBox>
        </>
      )}
    </Form>
  );
};

export default NewExpense;

const Form = styled.div`
    background-color: #AD9BE9;
    width: 780px;
    max-height: 287px;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 30px;
`
const AddExpense = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
const BtnBox = styled.div`
    display: flex;
    justify-content: flex-end;
`
const InputBox = styled.div`
    display: flex;
    flex-wrap: wrap;
`