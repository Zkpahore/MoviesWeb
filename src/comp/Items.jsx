import React from 'react';
import { useParams } from 'react-router-dom';

function ProductDetails({ products }) {
  const { id } = useParams();
  const product = products.find(product => product.id === parseInt(id));

  if (!product) {
    return <div>Page not found</div>;
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-4 sm:p-8">
      <div className="max-w-4xl w-full bg-white rounded-xl shadow-2xl hover:shadow-3xl transition-shadow duration-500 overflow-hidden">
        
        {/* Movie Poster and Info Container */}
        <div className="sm:flex sm:space-x-8">
          {/* Movie Poster */}
          <div className="relative sm:w-1/2 overflow-hidden rounded-t-xl sm:rounded-l-xl sm:rounded-tr-none">
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-64 sm:h-full object-cover transform transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* Movie Info Section */}
          <div className="p-6 sm:p-8 sm:w-1/2 flex flex-col justify-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
                {product.name} <span className="text-indigo-600">({product.year})</span>
              </h2>
              <p className="text-gray-600 text-sm sm:text-base mb-6 leading-relaxed">
                {product.description || 'No description available.'}
              </p>

              {/* Category and Details */}
              <div className="text-base sm:text-lg text-gray-700 font-medium mb-6">
                <span className="font-bold text-indigo-600">Genre: </span> {product.type}
              </div>
            </div>

            {/* Button Group */}
            <div className="flex space-x-4 mt-6">
              <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-bold rounded-lg shadow-md hover:bg-gradient-to-l hover:from-indigo-500 hover:to-blue-500 hover:shadow-lg transition-all duration-300">
                Watch Now
              </button>
              <button className="px-6 py-3 bg-gradient-to-r from-pink-400 to-red-400 text-white font-bold rounded-lg shadow-md hover:bg-gradient-to-l hover:from-red-400 hover:to-pink-400 hover:shadow-lg transition-all duration-300">
                Download
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
