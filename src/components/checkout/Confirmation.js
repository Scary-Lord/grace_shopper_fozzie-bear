import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'

const Confirmation = () => {
  return (
    <div>
      <Navbar />
      <h1>Your order has been received!</h1>
      <h2>Confirmation number: {Math.floor(Math.random() * 1000001)}</h2>
      <Footer />
    </div>
  )
}

export default Confirmation