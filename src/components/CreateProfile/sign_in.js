import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../reducers/users';

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleLogin = (event) => {
    event.preventDefault();
    dispatch(login(username, password));
  };
//     const [username, setUsername]= useState('');
    
//     const [isError, setIsError]= useState(false)
// const handleChange=(e)=>{
//     const usernameinfo = e.target.value
//     setUsername = (usernameinfo)


//     e.target.value.lenght <=5
//     setIsError(lessThan8)
// }

  return (
     <form>
    <div className='signindiv'>
        <Link className='createlinks' to={'/'}>🔙Store</Link>
        
        <div>
        <h1 className='createhappy'>Sign in to your account</h1>
        <p className='signinarea'>Username</p>
        <input type="text" value={username} onChange={(event) => setUsername(event.target.value)}/><br/>
        <p className='signinarea'>Password</p>
        <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} /><br/>
        <button  className='signinarea'  type="submit">Sign in</button>
    </div>
        <p>Dont have an account with us?<Link className='createlinks' to={'/createProfile'}> 🔒Sign Up </Link></p>
    </div>
    </form>

  )
}

export default SignIn;