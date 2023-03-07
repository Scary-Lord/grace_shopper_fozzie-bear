import React, { useState, useEffect, useEffect} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';


import { fetchUserByUsername, selectCurrentUsers} from '../../reducers/currentUser';
import { useDispatch, useSelector } from "react-redux";



//     const [username, setUsername]= useState('');

//     const [isError, setIsError]= useState(false)
// const handleChange=(e)=>{
//     const usernameinfo = e.target.value
//     setUsername = (usernameinfo)


//     e.target.value.lenght <=5
//     setIsError(lessThan8)
// }

  return (
      <form onSubmit={handleSubmit}>
    <div className='signindiv'>
        <Link className='createlinks' to={'/'}>🔙Store</Link>

        {user ? (
        <div>
          <p>Welcome, {user.username}!</p>
          <p>Your address is {user.address}.</p>
        </div>
      ) : (
        <div>
        <h1 className='createhappy'>Sign in to your account</h1>
        <p className='signinarea' >Username</p>
        <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)}></input><br/>
        <p className='signinarea'>Password</p>
        <input type="password" name="password" ></input><br/>
        <button  className='signinarea'  type="submit" onClick={(event)=>handleSubmit(event)}>Sign in</button>
    </div>
        <p>Dont have an account with us?<Link className='createlinks' to={'/createProfile'}> 🔒Sign Up </Link></p>
        {errorMessage && <div>{errorMessage}</div>}
        {profileError && <div>{profileError}</div>}
    </div>
      )}


    </div>
    </form>

  )
}

export default SignIn;
