import { createContext, useState } from "react";
import employees from "../models/employees";

export const EmployeesContext = createContext();

function AppContextProvider(props)
{
  const [currentEmployee, setCurrentEmployee] = useState(employees[0])
  const [employeeList, setEmployeeList] = useState(employees);
}

export default AppContextProvider;
