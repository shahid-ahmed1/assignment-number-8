import React from 'react';
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { NavLink, useLocation } from 'react-router-dom';


const Navbar = () => {
  const location = useLocation();
const homePath = location.pathname ==='/';
    return (
        <div className={homePath?'bg-[#9538E2]':'bg-white '}>
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
          <div role="tablist" className="tabs tabs-border">
       <NavLink className={({isActive})=>`tab text-2xl font-bold ${isActive ?'tab-active':''}` } role="tab" to={'/'}>Home</NavLink>
        <NavLink role="tab" className={({isActive})=> (isActive?' text-lg ':' text-lg ')} to='/statistics'>Statistics</NavLink>
        <NavLink role="tab" className={({isActive})=> (isActive?' text-lg ':' text-lg ')} to='/dashboard'>Dashboard</NavLink>
        <NavLink className={({isActive})=> (isActive?' text-lg ':' text-lg ')} to='/about-us'>Sign Up</NavLink>
        </div>
      </ul>
    </div>
    <a className={homePath?'text-white text-2xl font-bold':'text-black text-2xl font-bold'}>Gadget Heaven</a>
  </div>
  <div className="navbar-center hidden lg:flex items-center">
    <ul className={homePath?'text-white menu menu-horizontal px-1':' menu menu-horizontal px-1 text-black '}>
    
       <NavLink role="tab" className={({isActive})=>` ${isActive ?'tab-active  text-lg underline':'text-lg  '} ${location.pathname === "/" ? " text-white" : "text-black"}` }  to={'/'}>Home</NavLink>
        <NavLink role="tab" className={({isActive})=>` ${isActive ?'tab-active  text-lg underline ml-4':'text-lg ml-4 '} ${location.pathname === "/" ? " text-white" : "text-black"}` } to='/statistics'>Statistics</NavLink>
        <NavLink role="tab" className={({isActive})=>` ${isActive ?'tab-active  text-lg underline ml-4':'text-lg ml-4 '} ${location.pathname === "/" ? " text-white" : "text-black"}` } to='/dashboard'>Dashboard</NavLink>
        <NavLink className={({isActive})=>`  ${isActive ?'tab-active  text-lg underline ml-4':'text-lg  ml-4'} ${location.pathname === "/" ? " text-white" : "text-black"}` } to='/about-us'>Sign Up</NavLink>
        
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