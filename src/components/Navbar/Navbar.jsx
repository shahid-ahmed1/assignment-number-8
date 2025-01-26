import React from 'react';
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';


const Navbar = () => {
    return (
        <div className='bg-[#9538E2]'>
            {/* navbar */}
            <div className="navbar  w-[1280px] mx-auto ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       <NavLink className={({isActive})=> (isActive?'text-orange-500 text-lg ':'hover:bg-orange-500 text-lg ')} to={'/'}>Home</NavLink>
        <NavLink className={({isActive})=> (isActive?'text-orange-500 text-lg ':'hover:bg-orange-500 text-lg ')} to='/statistics'>Statistics</NavLink>
        <NavLink className={({isActive})=> (isActive?'text-orange-500 text-lg ':'hover:bg-orange-500 text-lg ')} to='/dashboard'>Dashboard</NavLink>
        <NavLink className={({isActive})=> (isActive?'text-orange-500 text-lg ':'hover:bg-orange-500 text-lg ')} to='/about-us'>About Us</NavLink>
      </ul>
    </div>
    <a className=" text-xl font-bold text-white">Gadget Heaven</a>
  </div>
  <div className="navbar-center hidden lg:flex ">
    <ul className="menu menu-horizontal px-1 flex gap-5">
        <NavLink className={({isActive})=> (isActive?'text-orange-500 text-lg ':'hover:bg-orange-500 text-lg ')} to={'/'}>Home</NavLink>
        <NavLink className={({isActive})=> (isActive?'text-orange-500 text-lg ':'hover:bg-orange-500 text-lg ')} to='/statistics'>Statistics</NavLink>
        <NavLink className={({isActive})=> (isActive?'text-orange-500 text-lg ':'hover:bg-orange-500 text-lg ')} to='/dashboard'>Dashboard</NavLink>
        <NavLink className={({isActive})=> (isActive?'text-orange-500 text-lg ':'hover:bg-orange-500 text-lg ')} to='/about-us'>About Us</NavLink>
      
    </ul>
  </div>
  <div className="navbar-end">
    <p className='mr-4 p-2 bg-white rounded-full'><IoCartOutline></IoCartOutline></p>
    <p className=' p-2 bg-white rounded-full'><FaRegHeart></FaRegHeart></p>
  </div>
             </div>
             
        </div>
        
    );
};

export default Navbar;