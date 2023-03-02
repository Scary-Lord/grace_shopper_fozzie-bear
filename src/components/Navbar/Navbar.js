import React, {useState} from 'react'
import { Link } from 'react-router-dom'

import SecNavbar from './SecNavbar'

const Navbar = () => {

  const[open, setOpen]= useState(false)
  const OpenCat = () =>{
    setOpen(!open);
  };

  return (
    
<div>
    <div className='navbcolor'>
   <ul className='ulNav'>
    
    <li className='navitems'><Link className='Anchors' to={'/'}>Home</Link> </li>
    <button onClick={OpenCat}>Categories</button>
    

    <li className='navitems'>
      <Link className='Anchors' to={'/'}> Log in </Link>/
      <Link className='Anchors' to={'/user/addUser'}> Sign Up </Link>
    </li>

    <li className='navitems'><Link className='Anchors' to={'/cartPage'}><img className='navcartimg' src={"https://img.myloview.com/stickers/shopping-cart-icon-isolated-on-dark-background-400-253477467.jpg"} alt="cart"></img></Link> </li>
   
   </ul>
    </div>
    <div>
      
      {open? (
        <SecNavbar/>
      ):null}
      
      </div>
   
    </div>
  )
}

export default Navbar;