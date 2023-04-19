import React from 'react'
import { BsArrowUpSquare } from "react-icons/bs";
import { BsArrowDownSquare } from "react-icons/bs";
import styled from 'styled-components';

const Select = ({ selectedYear, getSelectValue, ascendingFunc, descendingFunc }) => {
  return (
    <SelectBlock>
        <Title>Фильтр по году</Title>
        <SelectBox>
          <div>
            <SortUpBtn onClick={() => ascendingFunc()} />
            <SortDownBtn onClick={() => descendingFunc()} />
          </div>
          <SelectTeg
            value={selectedYear}
            onChange={getSelectValue}
          >
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
          </SelectTeg>
        </SelectBox>
      </SelectBlock>
  )
}

export default Select

const SelectBlock = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const SelectBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const SelectTeg = styled.select`
    border-radius: 6px;
    padding: 12px 24px;
    font-size: 1.1rem;
    font-weight: bold;
`
const Title = styled.label`
    color:white;
    padding: 20px;
    font-weight: bold;
    font-size: 1.4rem;
`
const SortUpBtn = styled(BsArrowUpSquare)`
    margin: 5px;
    font-size: 2rem;
    color: aliceblue;
`
const SortDownBtn = styled(BsArrowDownSquare)`
    margin: 5px;
    font-size: 2rem;
    color: aliceblue;
`