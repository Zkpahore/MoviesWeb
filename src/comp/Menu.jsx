import React, { useState } from 'react';
import SearchBar from './SearchBar';

const Menu = ({ onSearch }) => {
const [open, setOpen] = useState(false);
const HandleClick = () => {
  setOpen(!open);
}
  return (
    <div>
  <nav className='flex bg-gray-800 text-white py-2 px-6 justify-between items-center relative'>
    <ol className='space-x-6 hidden lg:flex md:flex'>
      <li>Home</li>
      <li>About</li>
      <li>Product</li>
    </ol>
   <div className='flex md:hidden lg:hidden'>
    <button onClick={HandleClick}>||||</button>
   </div>
    <div className='flex justify-end space-x-6'>
      <SearchBar onSearch={onSearch} />
    </div>
  </nav>
  {open && 
  <nav className='bg-gray-100 absolute w-2/6 h-screen'>
  <ol className='block lg:hidden md:hidden space-y-4 py-6 list-none font-serif'>
    <li className='text-center cursor-pointer'>Home</li> <hr />
    <li className='text-center cursor-pointer'>About</li> <hr />
    <li className='text-center cursor-pointer'>Catagories</li> <hr />
    <li className='text-center cursor-pointer'>Products</li> <hr />
    <li className='text-center cursor-pointer'>services</li> <hr />
    <li className='text-center cursor-pointer'>Contact Us</li> <hr />
  </ol>
</nav>
}
</div>
  );
};

export default Menu;
