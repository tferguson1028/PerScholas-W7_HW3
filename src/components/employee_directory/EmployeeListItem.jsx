import React from 'react'

function EmployeeListItem({employee}) {
  return (
    <div className='EmployeeListItem'>
      <img className="portrait" src={employee.profile} alt="#" />
      <span>
        <h4>{employee.name}</h4>
        <h5>{employee.title}</h5>
      </span>
    </div>
  )
}

export default EmployeeListItem
