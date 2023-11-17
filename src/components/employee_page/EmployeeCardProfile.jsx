import React from 'react'

function EmployeeCardProfile({ employee }) {
  return (
    <div className='EmployeePageProfile'>
      <img className="portrait" src={employee.profile} alt="#" />
      <span>
        <h2>{employee.name}</h2>
        <p>{employee.title}</p>
      </span>
    </div>
  )
}

export default EmployeeCardProfile
