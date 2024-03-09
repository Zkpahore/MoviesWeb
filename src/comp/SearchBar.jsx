import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <div>
      <input className='border-2 rounded-lg border-black text-black'
        type="text"
        placeholder=" Search products..."
        value={query}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchBar;
