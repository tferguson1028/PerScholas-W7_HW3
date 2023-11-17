import React from 'react'

function EmployeeListItem({employee}) {
  return (
    <div className='EmployeeListItem'>
      <img className="portrait" src={employee.profile} alt="#" style={{backgroundColor: employee.backColor}}/>
      <span>
        <h4>{employee.name}</h4>
        <p>{employee.title}</p>
      </span>
    </div>
  )
}

export default EmployeeListItem
