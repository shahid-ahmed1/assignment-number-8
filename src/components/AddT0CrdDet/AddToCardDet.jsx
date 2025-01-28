import React from 'react';
import { TiDelete } from "react-icons/ti";
import { NavLink } from 'react-router-dom';
const AddToCardDet = ({item}) => {
    const {product_id,product_title,product_image,category,price,description,specification,availability,rating}= item
    return (
        <div className=' mt-10'>
            <div>
            <div className="card  card-side p-4 bg-base-100 shadow-xl">
  <figure>
    <img className='w-40 h-40 rounded-2xl'
      src={product_image}
      alt="Movie" />
  </figure>
  <div className="card-body">
    <h2 className="text-2xl font-bold mt-2">{product_title}</h2>
    <p >{description}</p>
    <p className='text-xl font-bold mt-2'>Price $:{price}</p>
    <div className="card-actions  justify-end">
  <NavLink>
  <button   className="cursor-pointer"><TiDelete size={30}></TiDelete></button>
  </NavLink>
    </div>
  </div>
</div>
            </div>
        </div>
    );
};

export default AddToCardDet;