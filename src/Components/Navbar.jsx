import React from 'react'
import airbnblogo from '../Assets/airbnbLogo.png'
import '../Style/navbar.css'

const Navbar = () => {
  return (
    <div className='nav-bar'>
      <img src={airbnblogo} alt="" className='logoImg'/>
    </div>
  )
}

export default Navbar
