import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductByIdAsync, selectProduct } from "../../reducers/singleProduct";

const ProductCard = () => {
  const{id}= useParams();
  const singleProduct = useSelector(selectProduct);
  const { name, price,  imageUrl } = singleProduct;

  const dispatch = useDispatch();

  useEffect(()=>{dispatch(fetchProductByIdAsync(id))}, [dispatch,id]);

  return (
    <div id="product-card">
      <div className='column'>
        <div className="product-card-name">
          <h1>{name}</h1>
        </div>
        <div className='product-card-image'>
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
