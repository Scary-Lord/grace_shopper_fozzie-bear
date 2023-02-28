import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
      <Link to='/contact' className='footLink'>Contact Us</Link>
      <Link to='/help' className='footLink'>Help</Link>
    </div>
  )
}

export default Footer