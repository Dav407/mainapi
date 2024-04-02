import React from 'react'
import { CiSearch } from "react-icons/ci";
import './Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
        <div className="left">
            <img className='logo' src="./Assets/logo.jpg" alt="" />
        </div>
        <div className="centre">
            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/product">Products</Link>
                <Link to="/services">Services</Link>
            </div>
        </div>
        <div className="right">
            <div className="searchBar-Con">
            <input type="search" placeholder='Search'/>
            <CiSearch />
            </div>
        </div>
    </nav>
  )
}

export default Navbar