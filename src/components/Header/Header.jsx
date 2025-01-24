import React from 'react';
import Navbar from '../Navbar/Navbar';
import BannerImg from '../BannerImg/BannerImg';

const Header = () => {
    return (
        <div className=''>

            <div className='bg-[#9538E2] pb-36 '>
           {/* navbar */}
           <Navbar></Navbar>
            </div>
            <div className='md:-mt-36 flex justify-center '>
                <BannerImg></BannerImg>
            </div>
        </div>
    );
};

export default Header;