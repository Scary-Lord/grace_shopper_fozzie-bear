import React, {useState} from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {

  const[open, setOpen]= useState(false)
  const OpenCat = () =>{
    setOpen(!open);
  };

  return (
    

    <div className='navbcolor'>
   <ul className='ulNav'>
    <li className='navitems'>
      <button onClick={OpenCat}>Categories</button>
      {open? (
        <ul className='navcat'>
          <li className='navitems'>Samsung </li>
          <li className='navitems'>Gaming Pc </li>
          <li className='navitems'>Apple </li>
          <li className='navitems'>Mouse </li>
          <li className='navitems'>Monitors </li>
          <li className='navitems'>Ram </li>
          <li className='navitems'>Laptops </li>
        </ul>
      ):null}
      
    </li>
    <li className='navitems'><Link className='Anchors' to={'/'}>Home</Link> </li>

    <li className='navitems'>
      <Link className='Anchors' to={'/'}> Log in </Link>/
      <Link className='Anchors' to={'/user/addUser'}> Sign Up </Link>
    </li>

    <li className='navitems'><Link className='Anchors' to={'/user/:cart'}><img className='navcartimg' src={"https://img.myloview.com/stickers/shopping-cart-icon-isolated-on-dark-background-400-253477467.jpg"} alt="cart"></img></Link> </li>
   
   </ul>
    </div>
  )
}

export default Navbar;