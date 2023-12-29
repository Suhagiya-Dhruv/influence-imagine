import React from 'react'
import Style from './style.module.css';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo/Logo';

const Navbar = () => {
  return (
    <>
    {/* <div className={Style.navbar}>
      <div style={{border: "1px solid blue"}}>
        <Logo />
      </div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/about">About us</Link>
        </li>
        <li>
          <Link to="/contactus">Contact us</Link>
        </li>
      </ul>
    </div> */}

<header className="bg-gray-900 text-white py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img src="logo.png" alt="" className="h-8 w-8 mr-2" />
          {/* <span className="font-semibold text-lg">Influence imagine</span> */}
        </div>
        <nav className="hidden lg:flex items-center space-x-4">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/portfolio" className="hover:text-gray-300">Portfolio</Link>
          <Link to="/services" className="hover:text-gray-300">Services</Link>
          <Link to="/about" className="hover:text-gray-300">About Us</Link>
          <Link to="/contactus" className="hover:text-gray-300">Contact</Link>
        </nav>
        {/* Add a responsive menu button for small screens */}
        <div className="lg:hidden">
          <button className="text-white focus:outline-none">
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </div>
    </header>
    </>
  )
}

export default Navbar