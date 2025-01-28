import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {

   
    return (
        <div>
                   <div className='text-center bg-[#9538E2] p-10 '>
                    <h1 className='text-4xl font-bold text-white'>Dashboard</h1>
                    <p className='mt-4 text-lg text-white'>Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
                   <div className='mt-6'>
                   <NavLink to='addtocart' className={({isActive})=> (isActive?'text-orange-500 text-lg ':'hover:bg-orange-500 text-lg ')}>  <button   className='btn text-xl rounded-4xl text-white px-10 bg-[#9538E2]'>Cart</button></NavLink>
                    <NavLink to='addtowish' className={({isActive})=> (isActive?'text-orange-500 text-lg ':'hover:bg-orange-500 text-lg ')}><button className='btn text-xl ml-4 rounded-4xl text-white px-10 bg-[#9538E2]'>Wishlist</button></NavLink>
                     
                    </div>           
                    
        </div> 
        <Outlet></Outlet> 
        <div>

        </div>
        </div>
    );
};

export default Dashboard;