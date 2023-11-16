import React from 'react'

function EmployeeCardProfile({ employee }) {
  return (
    <div>
      <img className="EmployeeProfile" src={employee.profile} alt="" />
      <h3>{employee.name}</h3>
      <h4>{employee.title}</h4>
    </div>
  )
}

export default EmployeeCardProfile
