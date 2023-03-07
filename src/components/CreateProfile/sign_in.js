import React, { useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';



const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [user, setUser] = useState(null);
  const [profileError, setProfileError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/users/login', { username, password });
      const token = response.data.token;
      Cookies.set('accessToken', token);
      console.log(token);
    } catch (error) {
      setErrorMessage(error.response.data.error);
    }
  };

  // useEffect(() => {
  //   // make an API call to get the user information
  //   axios.get('/api/users/profile', {
  //     headers: {
  //       Authorization: `Bearer ${localStorage.getItem('accessToken')}`
  //     }
  //   })
  //     .then(response => {
  //       setUser(response.data);
  //     })
  //     .catch(error => {
  //       console.error(error);
  //       setProfileError(error.message);
  //     });
  // }, []);

  // const getUserInformation = async () => {
  //   try {
  //     const response = await axios.get('/api/users/profile', {
  //       headers: {
  //         Authorization: `Bearer ${localStorage.getItem('accessToken')}`
  //       }
  //     });
  
  //     // Return the user information from the response data
  //     return response.data;
  //   } catch (error) {
  //     console.error(error);
  //     setProfileError(error.message);
  //   }
  // };

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
        <p className='signinarea'>Username</p>
        <input type="text" value={username} onChange={(event) => setUsername(event.target.value)}/><br/>
        <p className='signinarea'>Password</p>
        <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} /><br/>
        <button  className='signinarea'  type="submit">Sign in</button>
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