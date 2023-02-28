import React from 'react';
import ProductList from './productlist';
import CategoryBoxes from './catagoryboxes';

const Homepage = () => {
  return (
    <div className="homepage">
      <ProductList />
      <CategoryBoxes />
    </div>
  )
}

export default Homepage