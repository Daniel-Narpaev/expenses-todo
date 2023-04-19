import React from "react";
import ChartBar from "./ChartBar/ChartBar";
import styled from "styled-components";
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
    <ChartContainer>
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
    </ChartContainer>
  );
};

export default ExpenseFilter;

const ChartContainer = styled.div`
   padding: 1rem;
   border-radius: 12px;
   background-color: #f8dfff;
   text-align: center;
   display: flex;
   justify-content: space-around;
   height: 10rem;
`