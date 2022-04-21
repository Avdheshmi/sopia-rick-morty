import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav>
    <div className="logo"><h3>SOPIA</h3></div>
    <div className="menu">
      <ul>
            <NavLink className="navlink" to="/">Home</NavLink>
            <NavLink className="navlink"to="/about">About</NavLink>
            <NavLink className="navlink"to="/likedCharacters"> Liked</NavLink>
            
            </ul>
    </div>
</nav>
  )
}

export default Navbar