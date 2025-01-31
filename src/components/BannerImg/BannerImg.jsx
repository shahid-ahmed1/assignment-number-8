import React from 'react';

const BannerImg = () => {
    const divStyle = {
        backgroundImage: 'url("https://i.ibb.co.com/TBdwsT6K/banner.jpg")',
       
      };
    return (
        <div className= "w-[800px] rounded-xl  shadow-2xl  ">
         <div style={divStyle
         }>
<img className='rounded-2xl' src="https://i.ibb.co.com/TBdwsT6K/banner.jpg" alt="" />
         </div>
        </div>
    );
};

export default BannerImg;
