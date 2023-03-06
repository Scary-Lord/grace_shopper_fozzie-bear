
import React, { useEffect } from 'react';
import {  useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductByIdAsync, selectProduct } from "../../reducers/singleProduct";
import Navbar from '../Navbar/Navbar';
import { Footer } from '../Footer';

export const SingleProduct = () => {

  const{id}= useParams();

  const singleProduct = useSelector(selectProduct);
  // console.log(singleProduct)
    const { name, price,shipping, imageUrl, description } = singleProduct;

   const dispatch = useDispatch();

  useEffect(()=>{dispatch(fetchProductByIdAsync(id))}, [dispatch,id]);
  return (
    <div>
      <Navbar/>
     <div id="single-product" >
        <div className='column'>
          <div className="product-name" >
          <h1>{name}</h1>
          </div>
          <div className='product-image' >
            <img src={`/${imageUrl}`} alt="Product" />
          </div>
          <div className='product-price'>
          <h2>{`$ ${price}`}</h2>
          </div>
          <div className='product-description' >
          <p>{description}</p>
          </div>
          <div className='add-to-cart-button'>
          <h3>Add To Cart</h3>
          </div>
        </div>
    </div>
    <Footer/>
    </div>
  )
}

export default SingleProduct
