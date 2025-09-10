import React from 'react'
import { FaCopyright } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='py-10 footerline'>
        <hr className='border border-black'/> 
        <p className="flex flex-row items-center mt-5 gap-2 justify-center text-xl font-bold">Made with love by<a href="https://www.instagram.com/_design2deploy_/" className='hover:text-gray-800' target='_blank'> Design2Deploy.</a></p>
    </div>
  )
}

export default Footer