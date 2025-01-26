import React from 'react';

const Card = ({item}) => {
  const {product_id,product_title,product_image,category,price,description,Specification,availability,rating}=item;
    return (
        <div className=''>
       <div className="card bg-base-500 p-4 shadow-sm">
  <figure>
    <img className='rounded-xl'
      src={product_image}
      alt="Product-img" />
  </figure>
  <div className="mt-5">
    <h2 className=" text-2xl font-bold">{product_title}</h2>
  <p className='text-xl font-medium'> Price: {price}</p>
    <div className="card-actions ">
      <button className="btn rounded-4xl mt-2 text-[#9538E2] bg-white">View Details</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Card;