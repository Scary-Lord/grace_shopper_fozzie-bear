import React from 'react';
// import ProductCard from '../Products/ProductCard';
import CategoryBoxes from './categoryboxes';
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar';
import Products from '../Products/Products';
import Productlist from './productlist';

const Homepage = () => {
  return (
    <div className="homepage">
      <Navbar />
      <Productlist />
      <CategoryBoxes />
      <Footer />
    </div>
  )
}

export default Homepage