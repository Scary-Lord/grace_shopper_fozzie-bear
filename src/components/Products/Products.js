import React,{useEffect} from 'react'
import ProductCard from './ProductCard';
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsAsync } from '../../reducers/product';
const Products = ({ product }) => {
  const dispatch=useDispatch()
  useEffect(()=>{dispatch(fetchProductsAsync())},[dispatch])
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
