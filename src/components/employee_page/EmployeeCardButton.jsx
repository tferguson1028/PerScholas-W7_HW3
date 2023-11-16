import React from 'react'

function EmployeeCardButton({textContent, info}) {
  return (
    <div>
      <span>
        <h4>{textContent}</h4>
        <h5>{info}</h5>
      </span>
      <img className="icon leftArrow" src="#" alt="" />
    </div>
  )
}

export default EmployeeCardButton
