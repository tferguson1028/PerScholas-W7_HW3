import React from 'react'

function Header(props) {
  return (
    <div className='Header'>
      {
        (props.icon) ? <img className='icon' src={props.icon} alt='Back'></img> : <></>
      }
      <span className='textContent'>{props.textContent}</span>
    </div>
  )
}

export default Header
