import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Card from '../Card/Card';
import CardDitails from '../CardDitails/CardDitails';

const Cards = () => {
    const alldata = useLoaderData();
    const {category}=useParams();
    
    const [data ,setData] =useState([])
useEffect(()=>{
    if(category){
        const filterdByCategory = [...alldata].filter(data=>data.category===category);
        setData(filterdByCategory);
    }
    else{
        setData(alldata)
    }
        
    
       
  
    
}


,[alldata,category])

    return (
        <div className='w-[1240px] mx-auto mt-20'>
           <div className=' grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
         {data.map(item=><Card key={item.product_id} item={item}></Card>)
          
          
         }
           </div>
        </div>
    );
};

export default Cards;