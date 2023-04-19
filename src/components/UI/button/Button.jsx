import React from 'react'
import styled from 'styled-components'
const Button = ({title, marginright, disabled, onClick}) => {
  return (
    <StyledBtn disabled={disabled} style={{marginRight: marginright}} onClick={onClick}>{title}</StyledBtn>
  )
}

export default Button

const StyledBtn = styled.button`
    background-color: #4A026B;
    color: white;
    padding: 16px 18px;
    font-size: 1rem;
    border-radius: 10px;
    border: none;
    :active{
      background-color: #a420e0;
    }
`