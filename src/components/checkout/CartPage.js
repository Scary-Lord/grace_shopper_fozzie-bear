import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const CartPage = () => {
  // get cart items (getCart)...need to make the reducer that does this
  const cart = useSelector(getCart)
  
  const totalPrice = (cart) => {
    if(cart.length) {
      cart.reduce((total, product) => {
        return total += product.price
      }, 0) 
    }
    else {
      return 0
    }
  }

  return (
    <div className='cartPage'>
      <Navbar />
        <div className='cart'>
          <h1>Your cart:</h1>

          {/* checks if there are items in the cart, and maps them to a list if there are */}
          {cart && cart.length ?
            cart.map((product, i) => (
              <div className='cartItem' key={i}>
                <li>{product.name}</li>
                <li>{product.price}</li>
              </div>
          )) : <h1>It looks like your cart is empty</h1>}
          
          <h2>Cart total: ${totalPrice(cart)}</h2>

          <h2>Please fill out your shipping address:</h2>
          <form className='shippingInfo'>
              <label>First and last name:</label>
              <input></input>

              <label>Street address:</label>
              <input></input>

              <label>Apt/Unit number:</label>
              <input></input>

              <label>City:</label>
              <input></input>

              <label>State:</label>
              <input></input>

              <label>Zip code:</label>
              <input></input>
          </form>

          <Link to='/confirmation'>Checkout</Link>
        </div>
      <Footer />
    </div>
  )
}

export default CartPage