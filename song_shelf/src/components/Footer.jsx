import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Left side - Copyright */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p>&copy; {new Date().getFullYear()} Song Shelf. All Rights Reserved.</p>
        </div>

        {/* Middle - Navigation Links */}
        <div className="flex space-x-4 text-sm">
          <a href="/" className="hover:text-white transition">
            Home
          </a>
          <a href="/add" className="hover:text-white transition">
            Add Song
          </a>
          <a href="/about" className="hover:text-white transition">
            About
          </a>
        </div>

        {/* Right side - Social Links */}
        <div className="flex space-x-4">
          <a
            href="https://github.com/your-github"
            className="hover:text-white transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i> GitHub
          </a>
          <a
            href="https://www.netlify.com"
            className="hover:text-white transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-cloud"></i> Hosted on Netlify
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
