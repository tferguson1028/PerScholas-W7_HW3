/// What's happening?

// Step 1: Import the createContext and useState
import { createContext, useState } from "react";

// Step 2: Import the data that will be used 
import employees from "../models/employees";

// Step 3: Create the variable that will be transporting the data.
export const EmployeesContext = createContext();

// Step 4: Create the function that handles the passing process. 
function EmployeesContextProvider(props)
{
  const [employeeList, setEmployeeList] = useState(employees);
  const [currentEmployee, setCurrentEmployee] = useState(employeeList[0]);
  console.log(currentEmployee);

  return (
    <EmployeesContext.Provider
      value={{
        currentEmployee,
        setCurrentEmployee,
        employeeList
      }}
    >
      {props.children}
    </EmployeesContext.Provider>
  )
}

export default EmployeesContextProvider;
