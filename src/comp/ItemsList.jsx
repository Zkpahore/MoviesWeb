// Product.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ products }) => {
  return (
    <div>
      <h1>Products</h1>
      <div className="product-list">
        {products.map(product => (
          <Link key={product.id} to={`/product/${product.id}`} className="product-link">
            <div className="product-card">
              <h2>{product.title}</h2>
              <img src={product.img} alt={product.name} />
              <p>Price: {product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Product;
