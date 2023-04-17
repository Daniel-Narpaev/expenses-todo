import React from "react";
import "./ExpenseFilter.css";
import ChartBar from "./ChartBar/ChartBar";
const ExpenseFilter = ({expenses}) => {
    const maximumPrice = 3000
  const months = [
    {
      label: "Январь",
      currentPrice: 0,
    },
    {
      label: "февраль",
      currentPrice: 0,
    },
    {
      label: "март",
      currentPrice: 0,
    },
    {
      label: "апрель",
      currentPrice: 0,
    },
    {
      label: "май",
      currentPrice: 0,
    },
    {
      label: "июнь",
      currentPrice: 0,
    },
    {
      label: "июль",
      currentPrice: 0,
    },
    {
      label: "август",
      currentPrice: 0,
    },
    {
      label: "сентябрь",
      currentPrice: 0,
    },
    {
      label: "октябрь",
      currentPrice: 0,
    },
    {
      label: "ноябрь",
      currentPrice: 0,
    },
    {
      label: "декабрь",
      currentPrice: 0,
    },
  ];
  expenses.forEach(elem => {
    const monthNumber = new Date(elem.date).getMonth()
    months[monthNumber].currentPrice += elem.price
});
  return (
    <div className="chartContainer">
      {months.map((item) => {
        return (
          <ChartBar
            key={item.label}
            label={item.label}
            currentPrice={item.currentPrice}
            maximumPrice={maximumPrice}
          />
        );
      })}
    </div>
  );
};

export default ExpenseFilter;
