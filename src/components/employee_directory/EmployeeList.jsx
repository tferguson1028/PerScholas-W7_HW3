import React, {useContext} from 'react'
import EmployeeListItem from './EmployeeListItem'
import { EmployeesContext } from '../../context/EmployeesContext';

function EmployeeList() {
  const { employeeList } = useContext(EmployeesContext);
  
  return (
    <div className='EmployeeList'>
      { employeeList.map((employee, index) => <EmployeeListItem key={index} employee={employee} />) }
    </div>
  )
}

export default EmployeeList
