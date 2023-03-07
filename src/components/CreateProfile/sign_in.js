import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { fetchUserByUsername, selectCurrentUsers} from '../../reducers/currentUser';
import { useDispatch, useSelector } from "react-redux";


const SignIn = () => {


    const [username, setUsername]= useState('');
    const currentUser =useSelector(selectCurrentUsers);
      const dispatch = useDispatch();
  const handleSubmit =(event)=>{
    event.preventDefault();
    dispatch(fetchUserByUsername(username))}



      // useEffect(()=>{dispatch(fetchUserByUsername(username))});
//     const [isError, setIsError]= useState(false)
// const handleChange=(e)=>{
//     const usernameinfo = e.target.value
//     setUsername = (usernameinfo)


//     e.target.value.lenght <=5
//     setIsError(lessThan8)
// }

  return (

    <div className='signindiv'>
        <Link className='createlinks' to={'/'}>🔙Store</Link>

        <div>
        <h1 className='createhappy'>Sign in to your account</h1>
        <p className='signinarea' >Username</p>
        <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)}></input><br/>
        <p className='signinarea'>Password</p>
        <input type="password" name="password" ></input><br/>
        <button  className='signinarea'  type="submit" onClick={(event)=>handleSubmit(event)}>Sign in</button>
    </div>
        <p>Dont have an account with us?<Link className='createlinks' to={'/createProfile'}> 🔒Sign Up </Link></p>
    </div>

  )
}

export default SignIn;
