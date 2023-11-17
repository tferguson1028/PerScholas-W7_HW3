import React from 'react'

function EmployeeCardProfile({ employee }) {
  return (
    <div className='EmployeePageProfile'>
      <img className="portrait" src={employee.profile} alt="#" />
      <span>
        <h3>{employee.name}</h3>
        <h4>{employee.title}</h4>
      </span>
    </div>
  )
}

export default EmployeeCardProfile
