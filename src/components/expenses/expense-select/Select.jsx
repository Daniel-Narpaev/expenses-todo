import React from 'react'
import { BsArrowUpSquare } from "react-icons/bs";
import { BsArrowDownSquare } from "react-icons/bs";

const Select = ({ selectedYear, getSelectValue, ascendingFunc, descendingFunc }) => {
  return (
    <div className="firstBlock">
        <label className="Title">Фильтр по году</label>
        <div className="selec">
          <div>
            <BsArrowUpSquare className="sortBtn" onClick={() => ascendingFunc()} />
            <BsArrowDownSquare className="sortBtn" onClick={() => descendingFunc()} />
          </div>
          <select
            className="select"
            value={selectedYear}
            onChange={getSelectValue}
          >
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
          </select>
        </div>
      </div>
  )
}

export default Select