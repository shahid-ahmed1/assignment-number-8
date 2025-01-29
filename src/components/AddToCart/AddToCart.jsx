import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredCartData, removeToCart } from '../../utilitis';
import Card from '../Card/Card';
import CardDitails from '../CardDitails/CardDitails';
import AddToCardDet from '../AddT0CrdDet/AddToCardDet';

const AddToCart = () => {
    const allData = useLoaderData();
    const [datas ,setDatas]=useState([]);
    const [sortedByPr , setSortedByPr] =useState('')
     useEffect(()=>{
     const stordAddCart=  getStoredCartData();
     const intAddToData=stordAddCart.map(id=> parseInt(id));
     const addToData=allData.filter(data=> intAddToData.includes(data.product_id));
     setDatas(addToData);
     },[getStoredCartData,allData]);
    
       
    
     const handleRemoveData=(id)=>{ 
        removeToCart(id)
        }
        const handleSrotByPrice =(price)=>{
      
            setSortedByPr(price);
            if(price =='price'){
             const sorted = [...datas].sort((a,b)=>b.price-a-price);
             setDatas(sorted)
            }
        }
    return (
        <div className='w-[1240px] mx-auto mt-20'>
            <div className='flex justify-between items-center'>
                <h1 className='text-2xl font-bold'>Cart</h1>
                <div>
                    <button onClick={()=>handleSrotByPrice('price')} className='btn text-white rounded-2xl bg-[#9538E2]'>Sort by Price</button>
                    <button className='btn text-white rounded-2xl bg-[#9538E2] ml-3'>Purchase</button>
                </div>
            </div>
            <div className='mt-10 gap-5'>

            {datas.map(item=> <AddToCardDet  handleRemoveData={handleRemoveData} key={item.product_id} item={item}></AddToCardDet>)}
            </div>
        </div>
    );
};



export default AddToCart;