import React from 'react'
import styled from 'styled-components'
const ChartBar = ({ label, maximumPrice, currentPrice }) => {
  const fillHeight = (100 * currentPrice) / maximumPrice  
  return (
    <ChartBarContainer>
        <Scale>
          <ChartBarFill style={{height:`${fillHeight}%`}}/>
        </Scale>
        <Month>{label}</Month>
    </ChartBarContainer>
  )
}

export default ChartBar

const ChartBarContainer = styled.div`
    width: 40px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Scale = styled.div`
    width: 60%;
    height: 100%;
    background-color: #c3b4f3;
    border: 1px solid #313131;
    border-radius: 12px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`
const ChartBarFill = styled.div`
    background-color:rgb(23, 0, 104);
    width: 100%;
    transition: all 1s ease-out;
`
const Month = styled.p`
    font-weight: bold;
    font-size: 0.8rem;
    text-align: center;
`