import React from 'react'

function EmployeeListItem({employee}) {
  return (
    <div>
      <img src={employee.profile} alt="#" />
      <h4>{employee.name}</h4>
      <h5>{employee.title}</h5>
    </div>
  )
}

export default EmployeeListItem
