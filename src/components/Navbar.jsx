import React from 'react'

const Navbar = () => {
  return (
    <div>
        <header className="bg-gray-900 text-white px-8 py-4">
        <nav className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="text-[#ffadc1]  font-bold text-2xl">ALX</div>
          <ul className="flex space-x-12 text-gray-400 text-sm font-medium tracking-wider">
            <li className="hover:text-white cursor-pointer">ABOUT</li>
            <li className="hover:text-white cursor-pointer">PORTFOLIO</li>
            <li className="hover:text-white cursor-pointer">PROJECTS</li>
            <li className="hover:text-white cursor-pointer">BLOG</li>
            <li className="hover:text-white cursor-pointer">STUDIO</li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Navbar