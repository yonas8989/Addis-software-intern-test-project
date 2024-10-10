import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gray-900 text-white p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Song Manager</h1>
        
        {/* Hamburger menu for small screens */}
        <div className="sm:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>

        {/* Navigation menu */}
        <nav className={`flex-col sm:flex-row sm:flex gap-4 ${isOpen ? 'flex' : 'hidden'} sm:block`}>
        <ul className="flex space-x-4">
            <li>
              <Link to="/" className="text-white">Home</Link>
            </li>
            <li>
              {/* <Link to="/about" className="text-white">about</Link> */}
            </li>
            <li>
              <Link to="/song-list" className="text-white">Song List</Link>
            </li>
            <li>
              <Link to="/add-song" className="btn-square">add Song</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
