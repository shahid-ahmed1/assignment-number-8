import React, { useEffect, useState } from 'react';
import { getStoredWishData } from '../../utilitis';
import { useLoaderData } from 'react-router-dom';

import Card from '../Card/Card';
import AddToCardDet from '../AddT0CrdDet/AddToCardDet';

const AddToWish = () => {

    const allData = useLoaderData();
    const [datas ,setDatas]=useState([])
     useEffect(()=>{
     const stordAddCart=  getStoredWishData();
     const intAddToData=stordAddCart.map(id=> parseInt(id));
      
     const addToData=allData.filter(data=> intAddToData.includes(data.product_id));
     setDatas(addToData);

     },[getStoredWishData,allData])
    return (
        <div className='w-[1240px] mx-auto mt-20'>
        <h1 className='text-2xl font-bold '> Wishlest</h1>

        <div className='mt-10'>

{datas.map(item=> <AddToCardDet key={item.product_id} item={item}></AddToCardDet>)}
</div>
        </div>
    );
};

export default AddToWish;