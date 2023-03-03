import React,{useEffect} from 'react'
import ProductCard from './ProductCard';
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsAsync } from '../../reducers/product';
const Products = () => {
  const dispatch=useDispatch()
  useEffect(()=>{dispatch(fetchProductsAsync())},[dispatch])
    const products = useSelector(state => state.products);
  console.log(products.length)
  return (
    <div className='product-card'>{products ? products.map((item) => (
      <h1>p</h1>
      // <NavLink to={`api/products/${item.id}`} key={`All Products: ${item.id}`}>
      //   <ProductCard productid={item.id}/>
      // </NavLink>

    )):<div>No products to display</div>}
    </div>
  )
}

export default Products;
