import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './comp/Menu';
import Product from './comp/Product';
import ProductDetails from './comp/Items';
import productData from './comp/Data.json'
const App = () => {
  const products = productData.products;
 

  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleSearch = (query) => {
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={<>
            <Menu onSearch={handleSearch} />
            <Product products={filteredProducts} />
          </>}
        />
        <Route path="/Movies/:id" element={<ProductDetails products={products} />} />
      </Routes>
    </Router>
  );
};

export default App;