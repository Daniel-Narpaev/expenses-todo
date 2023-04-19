import React from 'react'
import styled from 'styled-components'
const Input = ({type, title, marginLeft, value, onChange}) => {
  return (
   <InputBlock> 
        <Label style={{marginLeft: marginLeft}}>{title}</Label>
        <StyledInput value={value} onChange={onChange} style={{marginLeft: marginLeft}} type={type}/>
    </InputBlock> 
    
  )
}

export default Input

const InputBlock = styled.div`
    display: flex;
    flex-direction: column;
`
const Label = styled.label`
    font-size: 1.2rem;
    font-family:  sans-serif;
    font-weight: bold;
    margin-left: 10px;
`
const StyledInput = styled.input`
    width: 340px;
    height: 39px;
    border-radius: 8px;
    border: 1px solid black;
    margin-left: 10px;
    margin-bottom: 20px;
`