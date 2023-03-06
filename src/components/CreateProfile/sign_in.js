import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const SignIn = () => {

//     const [username, setUsername]= useState('');
    
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
        <p className='signinarea'>Username</p>
        <input type="text"></input><br/>
        <p className='signinarea'>Password</p>
        <input type="password" name="password" ></input><br/>
        <button  className='signinarea'  type="submit">Sign in</button>
    </div>
        <p>Dont have an account with us?<Link className='createlinks' to={'/createProfile'}> 🔒Sign Up </Link></p>
    </div>

  )
}

export default SignIn;