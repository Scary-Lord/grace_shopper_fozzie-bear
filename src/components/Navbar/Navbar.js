import React, {useState} from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {

  const[open, setOpen]= useState(false)
  const OpenCat = () =>{
    setOpen(!open);
  };

  return (
    

    <div>
   <ul>
    <li className='navitems'>
      <button onClick={OpenCat}>Categories</button>
      {open? (
        <ul>
          
        </ul>
      ):null}
    </li>
    <li className='navitems'>Home </li>
    <li className='navitems'><Link to={'./'}> Log in </Link>/<Link to={'./'}> Sign Up </Link></li>
    <li className='navitems'><Link><img></img></Link></li>
   </ul>
    </div>
  )
}

export default Navbar