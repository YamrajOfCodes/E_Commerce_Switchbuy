import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";



const Footer = () => {
  return (
    <div className='w-full px-6 py-3 bg-green-400 mx-auto lg:w-full xl:w-full 2xl:w-full  '>
      <p className='text-sm mb-2 sm:text-md lg:text-lg'>Sign up for post your blog, for any query fill below email</p>
     <div className="flex gap-4">
     <input type="text" placeholder='Enter Your email' className='border px-2 rounded-md text-sm w-11/12 outline-none ' />
     <button className='px-4 py-2 rounded-md bg-green-700 text-sm hover:bg-green-600 text-white cursor-pointer'>Submit</button>
     </div>
     <div className="social my-3 w-10/12">
      <ul className='flex gap-3 lg:gap-4'>
        <li className='text-xl sm:text-2xl lg:text-3xl cursor-pointer bg-green-200 hover:bg-white p-2 rounded-full'><a  href="https://www.instagram.com/officialhungryrats/" target='_black'><FaInstagram /></a></li>
        <li className='text-xl sm:text-2xl lg:text-3xl cursor-pointer bg-green-200 hover:bg-white p-2 rounded-full'><a  href="https://www.linkedin.com/in/kundan-patil-a22206293/" target='_black'><FaLinkedin /></a></li>
        <li className='text-xl sm:text-2xl lg:text-3xl cursor-pointer bg-green-200 hover:bg-white p-2 rounded-full'><a  href="https://x.com/Kundanp82985546?t=yKayvtReeZu3lWdp07nedQ&s=08" target='_black'><FaXTwitter /></a></li>
      </ul>
     </div>
    </div>
  )
}

export default Footer
