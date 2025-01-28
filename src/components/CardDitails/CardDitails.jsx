import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { FaRegHeart } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { addToStoredCartData, getStoredCartData } from '../../utilitis';
const CardDitails = () => {
 const {detailId} = useParams();
const data = useLoaderData();
const items = data.find(item=>item.product_id==detailId);
const {product_id,product_title,product_image,category,price,description,specification,availability,rating}= items  ;
 
    const handleAddToCard=(id)=>{
addToStoredCartData(id)
    }
    return (
        <div>
                    <div className='text-center bg-[#9538E2] p-10 pb-44'>
                    <h1 className='text-4xl font-bold text-white'>Product Details</h1>
                    <p className='mt-4 text-lg text-white'>Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
                    
        </div>
        <div className='lg:-mt-36 w-[1140px] mx-auto mt-20'>
        <div className="card p-4 card-side bg-base-100 shadow-sm">
  <figure>
    <img className='w-96 rounded-xl'
      src={product_image}
      alt="Movie" />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-2xl font-bold ">{product_title}</h2>
    <p className='text-2xl'>Price:{price}</p>
    <p>{description}</p>
    <button className="btn bg-white w-24 rounded-lg">In Stock</button>
    {/* <p className='list-decimal '>   
    <p className='text-2xl mr-4 font-bold '>Specification:</p>
    {specification.map((spn)=><li>{spn}</li>)}
    </p> */}
    <p className='text-xl font-bold'>Rating</p>
    <div className='flex items-center gap-3'>
    <div className="rating ">
  <div className="mask mask-star bg-amber-400" aria-label="1 star"></div>
  <div className="mask mask-star bg-amber-400" aria-label="2 star"></div>
  <div className="mask mask-star bg-amber-400" aria-label="3 star" aria-current="true"></div>
  <div className="mask mask-star bg-amber-400" aria-label="4 star"></div>
  <div className="mask mask-star" aria-label="5 star"></div>

</div>
<div>
  <button className='btn text-xl font-bold'>{rating}</button>
</div>
</div>

    <div className="card-actions ">
<Link>
<button onClick={()=>handleAddToCard(detailId)} className="btn const bg-[#9538E2] rounded-2xl text-white">Add To Card <IoCartOutline className='text-2xl text-white'></IoCartOutline></button></Link>
<Link>
<p className=' p-2   text-2xl  ml-4 rounded-full'><FaRegHeart></FaRegHeart></p>

</Link>
</div>
  </div>
</div>
        </div>
<div>

</div>

<div>

</div>
        </div>
    );
}

export default CardDitails;