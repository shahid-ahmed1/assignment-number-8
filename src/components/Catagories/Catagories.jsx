import React from 'react';
import Catagory from '../Catagori/Catagory';
import { NavLink } from 'react-router-dom';

const Catagories = ({categories}) => {
    return (
        <div className='w-[1240px] mx-auto mt-20 '>
            <h1 className='text-center text-4xl text-black font-bold mb-10'>Explore Cutting-Edge Gadgets</h1>
             <div className=''>
            <div role="tablist " className="tabs   tabs-border justify-between ">
  {
    categories.map(category=><NavLink key={category.category} to={`/category/${category.category}`} role="tab" className={({isActive})=>`tab text-2xl font-bold ${isActive ?'tab-active':''}` } >{category.category}</NavLink>)
  }
  
</div>
            </div>
         
            <div>
         
            </div>
        </div>
    );
};

export default Catagories;