import React, { useState } from 'react';
import ProductList from './ProductList';

const MainComponent = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div>
      <ProductList products={products} onProductClick={handleProductClick} />
      {selectedProduct && (
        <div className="box">
          {/* Content of the box */}
          <h2>{selectedProduct.name}</h2>
          <p>Price: {selectedProduct.price}</p>
        </div>
      )}
    </div>
  );
};

export default MainComponent;
