import React from 'react';
import ProductList from './productlist';
import CategoryBoxes from './categoryboxes';
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar';

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