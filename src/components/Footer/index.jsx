import React from "react";
import Style from "./style.module.css";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto py-8 flex flex-wrap justify-between items-center">
        <div className="w-full md:w-1/2 lg:w-1/4 mb-8 lg:mb-0">
          <div className="flex items-center mb-4">
            <img src="logo.png" alt="Logo" className="h-12 w-12 mr-2" />
            <h2 className="text-2xl font-bold">Influence Imagine</h2>
          </div>
          <p className="text-gray-400">Providing innovative solutions for your business.</p>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 mb-8 lg:mb-0">
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="list-none">
            <li className="mb-2"><Link to="/" className="text-gray-400 hover:text-white">Home</Link></li>
            <li className="mb-2"><Link to="/portfolio" className="text-gray-400 hover:text-white">Portfolio</Link></li>
            <li className="mb-2"><Link to="/services" className="text-gray-400 hover:text-white">Services</Link></li>
            <li className="mb-2"><Link to="/about" className="text-gray-400 hover:text-white">About us</Link></li>
            <li className="mb-2"><Link to="/contactus" className="text-gray-400 hover:text-white">Contact us</Link></li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 mb-8 lg:mb-0">
          <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
          <p className="mb-2">Stay connected on social media:</p>
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-gray-400">
              <i className="fab fa-facebook">Facebook</i>
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <i className="fab fa-twitter">Twitter</i>
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <i className="fab fa-instagram">Instagram</i>
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 mb-8 lg:mb-0">
          <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
          <p className="text-gray-400 mb-2">211, Dhara Trade Center, Mahadev Chowk, Near by swaminarayan Temple, Mota Varachha Surat</p>
          <p className="text-gray-400 mb-2">India</p>
          <p className="text-gray-400">influenceimagine@gmail.com</p>
        </div>
      </div>
      <div className="text-center py-4 bg-gray-800">
        <p className="text-gray-400">&copy; {new Date().getFullYear()} Influence imagine. All rights reserved.</p>
      </div>
    </footer>
    </>
  );
};

export default Footer;
