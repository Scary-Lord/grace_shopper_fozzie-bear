import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeFromCart, selectCart } from '../../reducers/cart'

const CartPage = () => {
  const dispatch = useDispatch()
  const cart = useSelector(selectCart)
  
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [streetAdd, setStreetAdd] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [zip, setZip] = useState('')
  
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
                {/* need to be able to access the user's id */}
                {/* <button onClick={() => dispatch(removeFromCart(userId, product.id))}>Remove</button> */}
              </div>
          )) : <h1>It looks like your cart is empty!</h1>}
          
          <h2>Cart total: ${totalPrice(cart)}</h2>

          <h2>Please fill out your shipping address:</h2>
          <form className='shippingInfo'>
              <label>First name:</label>
              <input
              value={firstName}
              onChange={e => setFirstName(e.target.value)}/>
             
              <label>Last name:</label>
              <input
              value={lastName}
              onChange={e => setLastName(e.target.value)}/>

              <label>Street address:</label>
              <input
              value={streetAdd}
              onChange={e => setStreetAdd(e.target.value)}/>

              <label>City:</label>
              <input
              value={city}
              onChange={e => setCity(e.target.value)}/>

              <label>State:</label>
              <input
              value={state}
              onChange={e => setState(e.target.value)}/>

              <label>Zip code:</label>
              <input
              value={zip}
              onChange={e => setZip(e.target.value)}/>
          </form>

          <Link to='/confirmation'>Checkout</Link>
        </div>
      <Footer />
    </div>
  )
}

export default CartPage