import React from "react";
import { TiDelete } from "react-icons/ti";
import styled from "styled-components";
const ExpenseItem = ({ name, price, onDelete, date, item }) => {
  return (
    <List>
      <ListItemBlock>
        <Delete onClick={() => onDelete(item.id)} />
        <Date>{date}</Date>
        <Title>{name}</Title>
      </ListItemBlock>

      <Som>{price} SOM</Som>
    </List>
  );
};

export default ExpenseItem;

const List = styled.div`
    background-color: #4B4B4B;
    border-radius: 12px;
    padding: 12px 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 16px;
` 
const ListItemBlock = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Date = styled.span`
    background-color: #2A2A2A;
    padding: 15px 20px;
    border-radius: 12px;
    color: white;
    margin-right: 30px;
    border: 1px solid white;
`
const Som = styled.span`
    background-color: #40005D;
    padding: 10px 10px;
    border-radius: 12px;
    border: 2px solid white;
    font-weight: bold;
    color: white;
`
const Title = styled.p`
    font-size: 1rem;
    color: white;
`
const Delete = styled(TiDelete)`
  font-size: 2.3rem;
  margin-right: 5px;
`
