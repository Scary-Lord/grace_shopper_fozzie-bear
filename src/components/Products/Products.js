import React from 'react'
import ProductCard from './ProductCard';
import { NavLink } from "react-router-dom";

const Products = (product) => {
  return (
    <div className='product-card'>{product.map((item)=>(
      <NavLink to={`api/products/${item.id}`} key={`All Products: ${item.id}`}>
        <ProductCard productid={item.id}/>
      </NavLink>

    ))}
      </div>
  )
}

export default Products
