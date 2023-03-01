import React, { useEffect } from 'react';
import {  useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const SingleProduct = () => {
  const{productid}= useParams();
  const singleProduct = useSelector();
    const { name, price,shipping, id, imageUrl, description } = singleProduct.info;

   const dispatch = useDispatch();

  useEffect(()=>{dispatch(fetchProductByID(productid))}, [dispatch]);
  return (
     <div id="single-product" >
        <div className='column'>
          <div className="product-name" >
          <h1>{name}</h1>
          </div>
          <div className='product-image' >
            <img src={`/${imageUrl}`} alt="Product" />
          </div>
          <div className='product-price'>
          <h2>{price}</h2>
          </div>
          <div className='product-description' >
          <p>{description}</p>
          </div>
          <div className='add-to-cart button'>
          <h3>Add To Cart</h3>
          </div>
        </div>
    </div>
  )
}

export default SingleProduct
