import React from 'react'
import BurgerLogo from '../assets/burgerlogo.png'
import { Link} from 'react-router-dom'
import '../styles/Navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
      <div className='main'>
<img src={BurgerLogo} alt="burgerlogo" />
        <div className='mainLink'>
            <Link to='/'>Home</Link>
            <Link to='/menu'>Menu</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
