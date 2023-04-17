import React from 'react'
import "./Button.css"
const Button = ({title, marginright, disabled, onClick}) => {
  return (
    <button className='btn' disabled={disabled} style={{marginRight: marginright}} onClick={onClick}>{title}</button>
  )
}

export default Button