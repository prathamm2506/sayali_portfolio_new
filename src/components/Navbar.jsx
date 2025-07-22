import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-[#201E1A] text-white px-6 py-4">
      <nav className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="text-[#ffadc1] font-bold text-2xl">ALX</div>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 text-gray-400 text-sm font-medium tracking-wider">
          {['ABOUT', 'PORTFOLIO', 'PROJECTS', 'BLOG', 'STUDIO'].map((item) => (
            <li
              key={item}
              className="hover:text-white cursor-pointer transition-colors"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <ul className="md:hidden mt-4 space-y-4 px-4 text-gray-300 text-sm font-medium tracking-wider">
          {['ABOUT', 'PORTFOLIO', 'PROJECTS', 'BLOG', 'STUDIO'].map((item) => (
            <li
              key={item}
              className="hover:text-white cursor-pointer border-b border-gray-700 pb-2"
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Navbar;
