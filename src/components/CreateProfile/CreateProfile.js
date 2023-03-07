import React, { useState } from 'react';
import axios from 'axios';
import { Link} from 'react-router-dom';

const USER_REGEX=/^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;


function CreateProfile() {
  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');
  const [username, setUsername] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword]= useState('');
  const [rePassword, setRePassword]= useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipcode, setZipcode] = useState('');
  

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      fName: fName,
      lName: lName,
      username: username,
      password:password,
      address: address,
      email: email,
      city: city,
      state: state,
      zipcode: zipcode,
    };
    axios.post('/api/users/addUsers', formData)
      .then(response => {
        console.log('User created:', response.data);
        // handle success response here
      })
      .catch(error => {
        
        console.error('Error creating user:', error);
        // handle error response here
      });
      
        // if(!fName || !lName || !username || !password || !address || !email || !city || !state || !zipcode) 
    
      // const timeoutId = setTimeout(() => {
      //   window.location.href = "/sign_in";
      // }, 1000);
         
      
  };

  return (
    <div className='createactdiv'>
      <div className='formcreate'>
    <form  onSubmit={handleSubmit}>
      
    <Link className='createlinks' to={'/'}>🔙Store</Link>

      <h1 className='createhappy'> Create Acount</h1>

        <div>
        <input className='inputcreateact clear' type="text" placeholder='First name' value={fName} onChange={(e) => setFName(e.target.value)} />
        </div>

       <div>
        <input className='inputcreateact clear' type="text" placeholder='Last name' value={lName} onChange={(e) => setLName(e.target.value)} />
        </div>

        <div>
        <input className='inputcreateact clear' type="text" placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value) } />
        </div>
      
        <div>
        <input className='inputcreateact clear' type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        
        <div>
        <input className='inputcreateact clear' type="password" placeholder='Re-enter password' value={rePassword} onChange={(e) => setRePassword(e.target.value)} />
        </div>

        <div>
        <input className='inputcreateact clear' type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
      
     
        <div>
        <input className='inputcreateact clear' type="text" placeholder='Address' value={address} onChange={(e) => setAddress(e.target.value)} />
        </div>

        
        <div>
        <input className='inputcreateact clear' type="text" placeholder='city' value={city} onChange={(e) => setCity(e.target.value)} />
        </div>
     
        <div>
        <input className='inputcreateact clear' type="text" placeholder='State' value={state} onChange={(e) => setState(e.target.value)} />
        </div>
      
        <div>
        <input className='inputcreateact clear' type="number" placeholder='Zip code ex:12345' value={zipcode} onChange={(e) => setZipcode(e.target.value)} />
        </div>
      
      <button className='inputcreateact' type="submit">Create User</button>
      <p>Already have a Account? <Link className='createlinks' to='/sign_in'>🔒Log in</Link></p>
     
    </form>
    
    </div>
    <div>
      <p className='emojicreate'>🥰</p>
      <p className='createhappy'> We Are So happy that<br/> you chose us for your <br/>purshases</p>
    </div>
     </div>
  
  );
}

export default CreateProfile;
