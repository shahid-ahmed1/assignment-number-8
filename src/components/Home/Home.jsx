import React from 'react';
import Navbar from '../Navbar/Navbar';
import Banner from '../Banner/Banner';
import BannerImg from '../BannerImg/BannerImg';
import { Outlet, useLoaderData, useLocation, } from 'react-router-dom';
import Catagories from '../Catagories/Catagories';
const Home = () => {
    const categories = useLoaderData()

   
    return (
        <div >
           <div className='bg-[#9538E2] pb-36'>

          
            <div>
                <Banner></Banner>
             </div>
            
            </div>
            <div className='md:-mt-36 flex justify-center '>
                <BannerImg></BannerImg>
            </div>
            
            {/* category data  */}
                <Catagories categories={categories}></Catagories>
            <Outlet></Outlet>
           
        </div>
    );
};

export default Home;