import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {


  return (
    <div>
   <ul>
    <li className='navitems'></li>
    <li className='navitems'>Home </li>
    <li className='navitems'><Link> Log in </Link>/<Link> Sign Up </Link></li>
    <li className='navitems'></li>
   </ul>
    </div>
  )
}

export default Navbar