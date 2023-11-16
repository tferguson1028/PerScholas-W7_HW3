import React, {useContext} from 'react'
import EmployeeListItem from './EmployeeListItem'
import { EmployeesContext } from "../../App"

function EmployeeList() {
  const employees = useContext(EmployeesContext);
  
  return (
    <div>
      { employees.map((employee) => <EmployeeListItem employee={employee} />) }
    </div>
  )
}

export default EmployeeList
