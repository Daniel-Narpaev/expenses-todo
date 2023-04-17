import React from 'react'
import "./ChartBar.css"
const ChartBar = ({ label, maximumPrice, currentPrice }) => {
  const fillHeight = (100 * currentPrice) / maximumPrice  
  return (
    <div className='chartBarContainer'>
        <div className='scale'>
          <div className='chartBarFill' style={{height:`${fillHeight}%`}}/>
        </div>
        <p className='monthLabel'>{label}</p>
    </div>
  )
}

export default ChartBar