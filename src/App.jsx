import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './comp/Menu';
import Product from './comp/Product';
import ProductDetails from './comp/Items';

const App = () => {

  const products = [
    {id: 1, price: "$1", stocked: true, name: "Apple", img: "vite (2).png"},
    {id: 2, price: "$1", stocked: true, name: "Dragonfruit", img: "vite (6).png"},
    {id: 3, price: "$2", stocked: false, name: "Passionfruit", img: "vite (1).png"},
    {id: 4, price: "$2", stocked: true, name: "Spinach", img: "vite (4).png"},
    {id: 5, price: "$4", stocked: false, name: "Pumpkin", img: "vite (5).png"},
    {id: 6, price: "$1", stocked: true, name: "Peas", img: "vite (3).png"},
    {id: 7, price: "$1", stocked: true, name: "Apple", img: "vite (2).png"},
    {id: 8, price: "$1", stocked: true, name: "Dragonfruit", img: "vite (6).png"},
    {id: 9, price: "$2", stocked: false, name: "Passionfruit", img: "vite (1).png"},
    {id: 10, price: "$2", stocked: true, name: "Spinach", img: "vite (4).png"},
    {id: 11, price: "$4", stocked: false, name: "Pumpkin", img: "vite (5).png"},
    {id: 12, price: "$1", stocked: true, name: "Peas", img: "vite (3).png"},
    {id: 13, price: "$1", stocked: true, name: "Apple", img: "vite (2).png"},
    {id: 14, price: "$1", stocked: true, name: "Dragonfruit", img: "vite (6).png"},
    {id: 15, price: "$2", stocked: false, name: "Passionfruit", img: "vite (1).png"},
    {id: 16, price: "$2", stocked: true, name: "Spinach", img: "vite (4).png"},
    {id: 17, price: "$4", stocked: false, name: "Pumpkin", img: "vite (5).png"},
    {id: 18, price: "$1", stocked: true, name: "Peas", img: "vite (3).png"},
    {id: 19, price: "$1", stocked: true, name: "Apple", img: "vite (2).png"},
    {id: 20, price: "$1", stocked: true, name: "Dragonfruit", img: "vite (6).png"},
    {id: 21, price: "$2", stocked: false, name: "Passionfruit", img: "vite (1).png"},
    {id: 22, price: "$2", stocked: true, name: "Spinach", img: "vite (4).png"},
    {id: 23, price: "$4", stocked: false, name: "Pumpkin", img: "vite (5).png"},
    {id: 24, price: "$1", stocked: true, name: "Peas", img: "vite (3).png"}
  ];

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
        <Route path="/product/:id" element={<ProductDetails products={products} />} />
      </Routes>
    </Router>
  );
};

export default App;