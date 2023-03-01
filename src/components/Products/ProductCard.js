import React, { useEffect } from 'react';
import {  useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductByID } from "../../reducers/product";

const ProductCard = () => {
  const{productid}= useParams();
  const singleProduct = useSelector();
    const { name, price, id, imageUrl } = singleProduct.info;

   const dispatch = useDispatch();

  useEffect(()=>{dispatch(fetchProductByID(productid))});
  return (
     <div id="product-card" >
        <div className='column'>
          <div className="product-card-name" >
          <h1>{name}</h1>
          </div>
          <div className='product-card-image' >
            <img src={`/${imageUrl}`} alt="Product" />
          </div>
          <div className='product-card-price'>
          <h2>{price}</h2>
          </div>
        </div>
    </div>
  )
}

export default ProductCard
