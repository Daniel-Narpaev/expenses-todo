import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./expense-item/ExpenseItem";
import ExpenseFilter from "./expense-filter/ExpenseFilter";
import Select from "./expense-select/Select";
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
    <ul className="list">
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
    </ul>
  );
};

export default Expenses;
