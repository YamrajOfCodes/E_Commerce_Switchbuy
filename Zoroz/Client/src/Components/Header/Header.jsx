import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Header = () => {

 

  
  return (
       <>
         <nav className='w-11/12  mx-auto flex justify-between my-2 xl:w-9/12 z-10'>
         <div className="left">
       <Link to={"/"}> <h1 className='font-bold cursor-pointer sm:text-2xl'>SwitchBuy</h1></Link>
        </div>
        <div className="right flex gap-4 items-center">
        <Link to={"/products"}><h4>Products</h4></Link>
        {
         
           <Link to={"/cart"}><h4 className='text-sm cursor-pointer sm:text-lg'>Cart</h4></Link>
        }
        </div>
        </nav>
  </>
    
  )
}

export default Header
