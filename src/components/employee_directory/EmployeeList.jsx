import React, {useContext} from 'react'
import EmployeeListItem from './EmployeeListItem'
import { EmployeesContext } from '../../context/EmployeesContext';

function EmployeeList() {
  const employees = useContext(EmployeesContext);
  
  return (
    <div className='EmployeeList'>
      { employees.map((employee) => <EmployeeListItem employee={employee} />) }
    </div>
  )
}

export default EmployeeList
