import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, Rectangle, Area,XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const Statistics = () => {
    const [datas ,setDatas]=useState([]);
    useEffect(()=>{
       fetch('../allData.json')
       .then((res) => res.json())
       .then((data) => setDatas(data))
    },[])
        
  

    return (
        <div className='w-[1140px] mx-auto mt-20 '>
             <h1 className='text-3xl font-bold mb-5'> Statistics</h1>
            <div className='bg-yellow-50 p-5 rounded-2xl'>

           
         
          
          <BarChart
      width={1000}
      height={600}
      data={datas}
      margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" stroke="#f5f5f5" />
      <XAxis dataKey="product_title" />
      <YAxis dataKey='price' />
      <Tooltip />
      <Legend />
      <Bar dataKey="price" fill="#9538E2" />
     
    
     
    </BarChart>
    </div>
        </div>
    );
};

export default Statistics;