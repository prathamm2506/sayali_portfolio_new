import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'ABOUT', href: '#about' },
    { name: 'PORTFOLIO', href: '#portfolio' },
    // { name: 'INSTAGRAM', href: '#instagram' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <header className="bg-[#201E1A] text-white fixed px-6 py-4 w-full z-50">
      <nav className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="text-[#ffadc1] font-bold text-2xl fontme">ALX</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 text-gray-400 text-sm font-medium tracking-wider">
          {navLinks.map(({ name, href }) => (
            <li key={name}>
              <a
                href={href}
                className="hover:text-white transition-colors"
              >
                {name}
              </a>
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
          {navLinks.map(({ name, href }) => (
            <li key={name}>
              <a
                href={href}
                className="hover:text-white block border-b border-gray-700 pb-2"
                onClick={() => setIsOpen(false)} // close menu on link click
              >
                {name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Navbar;
