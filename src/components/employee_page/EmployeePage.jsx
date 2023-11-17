import React from 'react'
import Header from '../Header'
import EmployeeCardProfile from './EmployeeCardProfile'
import EmployeeCardButton from './EmployeeCardButton'

function EmployeePage({ currentEmployee }) {
  return (
    <div className='EmployeePage'>
     <Header icon="<" textContent="Employee" />
     <div className='EmployeeCard'>
      <EmployeeCardProfile employee={currentEmployee} />
      <EmployeeCardButton textContent="Call Office" info={currentEmployee.officeNumber}/>
      <EmployeeCardButton textContent="Call Mobile" info={currentEmployee.mobileNumber}/>
      <EmployeeCardButton textContent="SMS" info={currentEmployee.smsNumber}/>
      <EmployeeCardButton textContent="Email" info={currentEmployee.email}/>
     </div>
    </div>
  )
}

export default EmployeePage
