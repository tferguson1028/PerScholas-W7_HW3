// import './App.css';
import "./styles/BaseStyle.css"
import employees from './models/employees';
import HomePage from './components/employee_directory/HomePage';
import EmployeePage from './components/employee_page/EmployeePage';
import React, {useContext, useState} from 'react';

export const EmployeesContext = React.createContext(employees);

function App() {
  const [currentEmployee, setCurrentEmployee] = useState(employees[1]);

  return (
    <div className="App">
      <EmployeesContext.Provider value={employees}>
        <HomePage setEmployee={setCurrentEmployee}/>
        <EmployeePage currentEmployee={currentEmployee}/>
      </EmployeesContext.Provider>
    </div>
  );
}

export default App;
