import React from 'react';
import ProductList from './productlist';
import CatagoryBoxes from './catagoryboxes';

const Homepage = () => {
  return (
    <div className="homepage">
      <ProductList />
      <CatagoryBoxes />
    </div>
  )
}

export default Homepage