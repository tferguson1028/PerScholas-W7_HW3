// import './App.css';
import "./styles/BaseStyle.css"
import "./styles/HomePageStyle.css"
import "./styles/EmployeePageStyle.css"
import HomePage from './components/employee_directory/HomePage';
import EmployeePage from './components/employee_page/EmployeePage';

function App() {
  
  return (
    <div className="App">
      <HomePage />
      <EmployeePage />
    </div>
  );
}

export default App;
