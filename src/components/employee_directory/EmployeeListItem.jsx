import React from 'react'
import { EmployeesContext } from '../../context/EmployeesContext'
import { useContext } from 'react';

function EmployeeListItem({ employee }) {
  const { setCurrentEmployee } = useContext(EmployeesContext);

  return (
    <div className='EmployeeListItem'>
      <img className="portrait" src={employee.profile} alt="#" style={{backgroundColor: employee.backColor}}/>
      <span>
        <h4>{employee.name}</h4>
        <p>{employee.title}</p>
      </span>
      
      <button 
        onClick={() => setCurrentEmployee(employee)}
        style={
        {
          width: "100%", 
          height: "100%", 
          position: 'absolute', 
          top: "0", 
          left: "0", 
          margin: "0",
          opacity: "0"
        }}
      >
      </button>
    </div>
  )
}

export default EmployeeListItem
