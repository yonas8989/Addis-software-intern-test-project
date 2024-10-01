import React, { useState } from 'react';

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
          <a href="#home" className="text-lg font-medium hover:underline">Home</a>
          <a href="#songlist" className="text-lg font-medium hover:underline">Songlist</a>
          <a href="#contact" className="text-lg font-medium hover:underline">Contact</a>
          {/* <a href="#addsong" className="text-lg font-medium hover:underline">Add Song</a>
          <a href="#editsong" className="text-lg font-medium hover:underline">Edit Song</a> */}
        </nav>
      </div>
    </header>
  );
};

export default Header;
