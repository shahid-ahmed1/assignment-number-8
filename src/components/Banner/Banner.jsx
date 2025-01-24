import React from 'react';
import BannerImg from '../BannerImg/BannerImg';

const Banner = () => {
    return (
        <div>
        <div className='text-center p-10'>
            <h1 className='text-6xl font-bold text-white'>Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories</h1>
            <p className='mt-4 text-lg text-white'>Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
            <button className='btn mt-8 bg-white text-xl font-bold rounded-3xl text-[#9538E2]'>Shop Now</button>
</div>

        </div>
    );
};

export default Banner;