// ProductDetails.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = ({ products }) => {
  const { id } = useParams();
  const product = products.find(product => product.id === parseInt(id));

  if (!product) {
    return <div>not found</div>;
  }

  return (
   
    <div>
       <img src={product.img} alt={product.name} className='w-24 h-24 mb-4' />
      <h2>Name : {product.name}</h2>
      <p>Price: {product.price}</p>
    </div>
  
  );
};

export default ProductDetails;
