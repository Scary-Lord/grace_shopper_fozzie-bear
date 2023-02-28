import React from 'react';
import ProductList from './productlist';
import CategoryBoxes from './catagoryboxes';
import Footer from '../footer'

const Homepage = () => {
  return (
    <div className="homepage">
      <ProductList />
      <CategoryBoxes />
    </div>
  )
}

export default Homepage