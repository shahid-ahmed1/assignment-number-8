import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {

   
    return (
        <div>
                   <div className='text-center bg-[#9538E2] p-10 '>
                    <h1 className='text-4xl font-bold text-white'>Dashboard</h1>
                    <p className='mt-4 text-lg text-white'>Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
                    
                   <div className='mt-6 text-center flex justify-center '>
                   <div role="tablist" className="tabs tabs-border">
                   <NavLink to='addtocart' role="tab" className={({isActive})=>`btn text-xl rounded-4xl cursor-pointer px-10 bg-[#9538E2] ${isActive ?'tab-active bg-white text-black':'text-white cursor-pointer'}` }>  <button   className=''>Cart</button></NavLink>
                    <NavLink to='addtowish'  role="tab" className={({isActive})=>`btn text-xl rounded-4xl  px-10 bg-[#9538E2] ml-4 ${isActive ?'tab-active cursor-pointer bg-white text-black':'text-white cursor-pointer'}` }><button >Wishlist</button></NavLink>
                               
                    </div>           
                    </div>
        </div> 
        <Outlet></Outlet> 
        <div>

        </div>
        </div>
    );
};

export default Dashboard;