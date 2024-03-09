import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ products}) => {
  return (
<div className="flex flex-wrap">
        {products.map(product => (
          <Link key={product.id} to={`/product/${product.id}`} className="">
            <div className="w-72 h-auto bg-white rounded-lg shadow-md p-6 m-4 flex flex-col items-center">
            <img src={product.img} alt={product.name} className='w-24 h-24 mb-4' />
            <div className='font-bold text-lg mb-2'>{product.name}</div>
            <div className='text-gray-600'>Price: {product.price}</div>
            </div>
          </Link>
        ))}
      </div>
  );
};

export default Product;
