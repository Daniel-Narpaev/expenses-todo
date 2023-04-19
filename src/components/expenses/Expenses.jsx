import React, { useState } from "react";
import ExpenseItem from "./expense-item/ExpenseItem";
import ExpenseFilter from "./expense-filter/ExpenseFilter";
import Select from "./expense-select/Select";
import styled from "styled-components";
const Expenses = ({ expenses, onDelete }) => {
  const [selectedYear, setSelectedYear] = useState("2023");
  const [sortForDate, setSortForDate] = useState(false);
  const getSelectValue = (event) => {
    setSelectedYear(event.target.value);
  };

  const ascendingFunc = () => {
    setSortForDate(true);
  };
  const descendingFunc = () => {
    setSortForDate(false);
  };
  const filteredYear = expenses.filter((el) => {
    const stringifiedYear = new Date(el.date).getFullYear().toString();
    return stringifiedYear === selectedYear;
  });
  return (
    <UlList>
      <Select descendingFunc={descendingFunc} ascendingFunc={ascendingFunc} getSelectValue={getSelectValue} selectedYear={selectedYear}/>
      <ExpenseFilter expenses={filteredYear} />
      {sortForDate ? (
        <>
          {filteredYear
            .sort(
              (a, b) =>
                new Date(...b.date.split("/").reverse()) -
                new Date(...a.date.split("/").reverse())
            )
            .map((item) => {
              return (
                <ExpenseItem
                  key={item.id}
                  name={item.name}
                  price={item.price}
                  date={item.date}
                  item={item}
                  onDelete={onDelete}
                />
              );
            })}
        </>
      ) : (
        <>
          {filteredYear
            .sort(
              (a, b) =>
                new Date(...a.date.split("/").reverse()) -
                new Date(...b.date.split("/").reverse())
            )
            .map((item) => {
              return (
                <ExpenseItem
                  key={item.id}
                  name={item.name}
                  price={item.price}
                  date={item.date}
                  item={item}
                  onDelete={onDelete}
                />
              );
            })}
        </>
      )}
    </UlList>
  );
};

export default Expenses;

const UlList = styled.ul`
    margin-top: 28px;
    width: 100%;
    background-color: rgb(0, 0, 0);
    border: 1px solid rgb(3, 3, 3);
    padding: 28px 16px;
    border-radius: 15px;
`