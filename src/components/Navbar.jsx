import React from 'react'
import logo from "../assets/logo.png"



const Navbar = () => {
  return (
    <div className='navbar'>
        <ul className='navlist'>
            <div className="left-side">
            <li className='list-item'><a href="#home"><img src={logo} alt="logo" height={36}/></a></li>
            <li className='list-item'><a href="#discord">Discord</a></li>
            <li className='list-item-'><a href="#twitter">Twitter</a></li>
            </div>
            <div className="right-side">
            <li className='list-item' ><button className='btn'><a href="#twitter">Launch App</a></button></li> 
            </div>
        </ul>
    </div>
  )
}

export default Navbar