import React from 'react'
import "./Input.css"
const Input = ({type, title, marginLeft, value, onChange}) => {
  return (
   <div className='inputBlock'> 
        <label className='label' style={{marginLeft: marginLeft}}>{title}</label>
        <input className='input'value={value} onChange={onChange} style={{marginLeft: marginLeft}} type={type}/>
    </div> 
    
  )
}

export default Input