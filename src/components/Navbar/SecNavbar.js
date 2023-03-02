import React from 'react'
import { Link } from 'react-router-dom'
const SecNavbar = () => {

  

  return (
    

    <div className='secnavbcolor'>
   <ul className='seculNav'>
    
          <li className='secnavitems'><Link className='secnavlinks'>Samsung</Link> </li>
          <li className='secnavitems'><Link className='secnavlinks'>Gaming Pc</Link> </li>
          <li className='secnavitems'><Link className='secnavlinks'>Apple</Link> </li>
          <li className='secnavitems'><Link className='secnavlinks'>Mouse</Link> </li>
          <li className='secnavitems'><Link className='secnavlinks'>Monitors</Link> </li>
          <li className='secnavitems'><Link className='secnavlinks'>Ram</Link> </li>
          <li className='secnavitems'><Link className='secnavlinks'>Laptops</Link> </li>
        
   </ul>
    </div>
  )
}

export default SecNavbar;