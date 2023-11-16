import React, {useContext} from 'react'
import Header from '../Header'
import SearchBar from './SearchBar'
import EmployeeList from './EmployeeList'

function HomePage() {
  return (
    <div className='HomePage'>
      <Header textContent="Employee Directory" />
      <SearchBar />
      <EmployeeList />
    </div>
  )
}

export default HomePage
