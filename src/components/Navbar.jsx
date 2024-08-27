import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="src/assets/images/logo.png" // Path to your logo image
            alt="Brand Logo"
            className="h-8 w-auto" // Adjust height and width as needed
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/about" className="hover:text-gray-300">About</Link>
          <Link to="/services" className="hover:text-gray-300">Services</Link>
          <Link to="/contact" className="hover:text-gray-300">Contact</Link>
          <Link to="/checkout" className="bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600">Checkout</Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} aria-label="Toggle menu" className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-gray-800 text-white shadow-lg">
          <ul className="space-y-2 p-4">
            <li><Link to="/" className="block py-2 px-4 hover:bg-gray-700 rounded">Home</Link></li>
            <li><Link to="/about" className="block py-2 px-4 hover:bg-gray-700 rounded">About</Link></li>
            <li><Link to="/services" className="block py-2 px-4 hover:bg-gray-700 rounded">Services</Link></li>
            <li><Link to="/contact" className="block py-2 px-4 hover:bg-gray-700 rounded">Contact</Link></li>
            <li><Link to="/checkout" className="block py-2 px-4 bg-blue-500 hover:bg-blue-600 rounded">Checkout</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
}
