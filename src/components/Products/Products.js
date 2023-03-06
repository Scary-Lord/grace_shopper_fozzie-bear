import React,{useEffect} from 'react'
import ProductCard from './ProductCard';
import { NavLink } from "react-router-dom";
import {  useSelector } from "react-redux";
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Products = () => {
    const products = useSelector(state => state.products);
  console.log(products.length)
  return (
    <div>
      <Navbar/>
    <div className='product-page'>{products ? products.map((item) => (
      <NavLink to={`/products/${item.id}`}>
      <div className='product-card'>
      <img src={item.imageUrl} alt={item.name} width='150' height='150'></img>
      <h1>{item.name}</h1>

      <h2>{item.price}</h2>



      </div>
      </NavLink>
    )):<div>No products to display</div>}
    </div>
    <Footer/>
    </div>
  )
}

export default Products;
