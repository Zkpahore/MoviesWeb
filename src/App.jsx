import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './comp/Menu';
import Product from './comp/Product';
import ProductDetails from './comp/Items';

const App = () => {

  const products = [
    {id: 1, type: "Crime", price: "1972", stocked: true, name: "The Godfather", img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ6EAZYpFPv-j-msWE7uFUueby2qiH_lz67ryBOJ41kg4nKHJ6y", catagary: "Hollywood", description: "The Godfather is a crime novel by American author Mario Puzo. Originally published on 10 March 1969 by G. P. Putnam's Sons, the novel details the story of a fictional Mafia family in New York City and Long Island, headed by Vito Corleone, the Godfather"},
    {id: 2,type: "Crime", price: "2008", stocked: true, name: "The Dark Knight", img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQkUywIUXDjHSQJIaNHYVs08osgBpF5Ot-xmB_omyEZeeRP9Xug", catagary: "Hollywood", description: "Batman has a new foe, the Joker, who is an accomplished criminal hell-bent on decimating Gotham City. Together with Gordon and Harvey Dent, Batman struggles to thwart the Joker before it is too late."},
    {id: 3, type: "epic / science / fiction", price: "2009", stocked: false, name: "Avatar", img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSYWVMx6h59vKIGkku5l3hPkBbqsErDsCB7-QZ9zaKuhTN8edvL", catagary: "Hollywood", description: "Jake, a paraplegic marine, replaces his brother on the Na'vi-inhabited Pandora for a corporate mission. He is accepted by the natives as one of their own, but he must decide where his loyalties lie."},
    {id: 4, type: "Action / Comedy / Romance", price: "2015", stocked: true, name: "Dilwale", img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTYu4HW1lC3T94JfRQcVv7ufa1Ep_WEM5lGF7QxF-5QGCP4pnpd", catagary: "Bollywood", description: "Raj and Meera fall in love, but are forced to stay away from each other as they belong to rival mafia families. Years later, they get a second chance when their siblings fall for each other."},
    {id: 5, price: "2013", stocked: false, name: "Dhoom 3", img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQirqBG2kDkZ4umeNknko5I6qSCGsWqaXyJaWV7eSUxTC0fa1Ui", catagary: "Bollywood", description: ""},
    {id: 6, price: "2017", stocked: true, name: "Golmaal Again", img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRJImfOrXdQ1aWMWgoJdyxyU9EkvxP0luz5uF5agqKUKOZAhyh5", catagary: "Bollywood", description: ""},
    {id: 7, price: "2001", stocked: true, name: "The Lord of the Rings", img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSYHuKZScdd6RHhzh-IDKga3wfTTd9cPEe1Y2JUI5gjvaxgJc3O", catagary: "Hollywood", description: ""},
    {id: 8, price: "2019", stocked: true, name: "Tiger Zinda Hai", img: "https://www.movienewsletters.net/photos/NZL_238411R1.jpg", catagary: "Bollywood", description: ""},
    {id: 9, price: "2023", stocked: true, name: "Pathaan", img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSmoZIoFgIkKCledRzZT3q3xy64ZwMfnVXSQUdfp7cSo1suHPye", catagary: "Bollywood" , description: ""},
    {id: 10, price: "2019", stocked: true, name: "Avengers: Endgame", img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTlzpyZ6LuQk1tzFnLMBQP5AcNLrA1sLFPNqgMYXZ2EpSaHnx7v", catagary: "Hollywood"},
    {id: 11, price: "2021", stocked: true, name: "Spider-Man", img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQtU4DiRFRr0155DjcHlSsgJy9opzt_MPMJmHfG4MEa31-A82Xb", catagary: "Hollywood"},
    {id: 12, price: "2018", stocked: true, name: "Thugs of Hindostan", img: "https://upload.wikimedia.org/wikipedia/en/d/d1/Thugs_of_Hindostan_poster.jpg", catagary: "Bollywood"}, 
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
        <Route path="/Movies/:id" element={<ProductDetails products={products} />} />
      </Routes>
    </Router>
  );
};

export default App;