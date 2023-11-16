import React from 'react'

function Header(props) {
  return (
    <div className='Header'>
      {
        (props.icon) ? <img className='icon' src={props.icon} alt='Back'></img> : <></>
      }
      <h3>{props.textContent}</h3>
    </div>
  )
}

export default Header
