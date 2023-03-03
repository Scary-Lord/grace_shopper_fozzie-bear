import React from 'react'

const Confirmation = () => {
  return (
    <div>
      <h1>Your order has been received!</h1>
      <h2>Confirmation number: {Math.floor(Math.random() * 1000001)}</h2>
    </div>
  )
}

export default Confirmation
