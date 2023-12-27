import React from 'react'
import Style from './style.module.css';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo/Logo';

const Navbar = () => {
  return (
    <div className={Style.navbar}>
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
    </div>
  )
}

export default Navbar