import React from 'react';
import ProductList from './productlist';
import CategoryBoxes from './catagoryboxes';
import Footer from '../footer'
import Navbar from '../Navbar';

const Homepage = () => {
  return (
    <div className="homepage">
      <Navbar />
      <ProductList />
      <CategoryBoxes />
      <Footer />
    </div>
  )
}

export default Homepage