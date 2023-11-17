import React from 'react'
import Header from '../Header'
import EmployeeCardProfile from './EmployeeCardProfile'
import EmployeeCardButton from './EmployeeCardButton'

// import icon from "/assets/arrows/back-chevron.png";

function EmployeePage({ currentEmployee }) {
  return (
    <div className='EmployeePage'>
      {/* Used resource to learn how to get images: https://stackoverflow.com/a/48037875 */}
     <Header icon={"/assets/arrows/back-chevron.png"} textContent="Employee" />
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
