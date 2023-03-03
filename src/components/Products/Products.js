import React from 'react'
import ProductCard from './ProductCard';
import { NavLink } from "react-router-dom";

const Products = ({ product }) => {
  if (!Array.isArray(product)) {
    return <div>No products to display</div>;
  }
  return (
    <div className='product-card'>{product.map((item) => (
      <NavLink to={`api/products/${item.id}`} key={`All Products: ${item.id}`}>
        <ProductCard productid={item.id}/>
      </NavLink>
    ))}
    </div>
  )
}

export default Products;
