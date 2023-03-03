import React,{useEffect} from 'react'
import ProductCard from './ProductCard';
import { NavLink } from "react-router-dom";
import {  useSelector } from "react-redux";

const Products = () => {
    const products = useSelector(state => state.products);
  console.log(products.length)
  return (
    <div className='product-card'>{products ? products.map((item) => (
      <h1>{item.name}</h1>
      // <NavLink to={`api/products/${item.id}`} key={`All Products: ${item.id}`}>
      //   <ProductCard productid={item.id}/>
      // </NavLink>


    )):<div>No products to display</div>}
    </div>
  )
}

export default Products;
