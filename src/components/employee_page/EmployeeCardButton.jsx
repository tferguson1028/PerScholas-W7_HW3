import React from 'react';

// https://stackoverflow.com/a/39999421
// import icon from "/assets/arrows/right-arrow.png";

function EmployeeCardButton({textContent, info}) {
  return (
    <div className='EmployeePageButton'>
      <span>
        <h4>{textContent}</h4>
        <p>{info}</p>
      </span>
      {/* Used resource to learn how to get images: https://stackoverflow.com/a/48037875 */}
      <img className="icon leftArrow" src={"/assets/arrows/right-arrow.png"} alt="#" />
    </div>
  )
}

export default EmployeeCardButton
