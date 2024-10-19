import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const Product = ({ products }) => {
  // Get unique categories
  const categories = [...new Set(products.map(product => product.catagary))];
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    // If the same category button is clicked again, deselect it
    setSelectedCategory(selectedCategory === category ? null : category);
  };

  return (
    <div className='bg-black lg:ml-12'>
      <div className='py-6 text-center font-semibold text-3xl font-serif'>
       <h1> Catagaries</h1>
      </div>
      <div className="flex justify-center mb-4 flex-wrap px-4">
      <button
          className={`px-4 py-2 mx-2 rounded m-1 ${
            selectedCategory === null ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'
          }`}
          onClick={() => setSelectedCategory(null)}
        >
          All
        </button>

        {categories.map(category => (
          <button
            key={category}
            className={`px-4 py-2 mx-2 rounded m-1 ${
              selectedCategory === category ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'
            }`}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap justify-center items-center">
        {products
          .filter(product => selectedCategory ? product.catagary === selectedCategory : true)
          .map(product => (
            <Link key={product.id} to={`/movies/${product.id}`} className="">
             <div className="w-72 h-auto bg-white rounded-xl shadow-md p-6 m-4 flex flex-col items-center transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-r from-purple-400 to-blue-400 hover:text-white hover:border-transparent border border-gray-200">
  <img src={product.img} alt={product.name} className="w-52 h-64 mb-4 rounded-lg transform transition-transform duration-500 hover:rotate-3 hover:scale-110" />
  
  <div className="font-bold text-lg mb-2 transition-colors duration-500">{product.name}</div>
  <div className="text-gray-600 transition-colors duration-500">Year: {product.price}</div>
</div>


            </Link>
          ))}
      </div>
      <Footer />
    </div>
  );
};

export default Product;
