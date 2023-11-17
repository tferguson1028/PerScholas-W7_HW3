import React from 'react';

// https://stackoverflow.com/a/39999421
import icon from "../../assets/arrows/right-arrow.png";

function EmployeeCardButton({textContent, info}) {
  return (
    <div className='EmployeePageButton'>
      <span>
        <h4>{textContent}</h4>
        <h5>{info}</h5>
      </span>
      <img className="icon leftArrow" src={icon} alt="#" />
    </div>
  )
}

export default EmployeeCardButton
