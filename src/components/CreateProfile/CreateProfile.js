
// // import { Link } from 'react-router-dom';
// import { useState } from 'react';
// import {  useDispatch } from 'react-redux';
// // import {addUsers} from 'src/reducers/addUser.js';


// const CreateProfile = () => {
//   const dispatch = useDispatch();
 
//     const [firstName, setFirstName]=useState('');
//     const [lastName, setLastName]=useState('');
//     const [username, setUsername]=useState('');
//     const [email, setEmail]=useState('');
//     const [address, setAddress]=useState('');
//     const [city, setCity]=useState('');
//     const [state, setState]=useState('');
//     const [zipcode, setZipcode]=useState('');

//   return (
    
//     <div>
//         <div>
//           <p>First Name</p>
//             <input type="text" placeholder='First Name' onChange={(event)=>{setFirstName(event.target.value)}}/>
            
//             <p>Last Name</p>
//             <input type="text" placeholder='Type Here' onChange={(event)=>{setLastName(event.target.value)}}/>

//             <p>Username</p>
//             <input type="text" placeholder='Type Here' onChange={(event)=>{setUsername(event.target.value)}}/>
          
//             <p>Email</p>
//             <input type="text" placeholder='Type Here' onChange={(event)=>{setEmail(event.target.value)}}/>

//             <p>Address</p>
//             <input type="text" placeholder='Type Here' onChange={(event)=>{setAddress(event.target.value)}}/>

//             <p>City</p>
//             <input type="text" placeholder='Type Here' onChange={(event)=>{setCity(event.target.value)}}/>

//             <p>State</p>
//             <input type="text" placeholder='Type Here' onChange={(event)=>{setState(event.target.value)}}/>
            
          
//             <p>Zipcode</p>
//             <input type="number" placeholder='Type Here' onChange={(event)=>{setZipcode(event.target.value)}}/>
//             <div>
//               {/* <button onClick={()=>{dispatch(addUsers({id: studentList[studentList.length -1].id +1, firstName, lastName, username, email, address, city, state, zipcode }))}}>Submitt</button> */}
//               {/* in this area i put all the data to be added when clicked and the in is going to be incremented by 1 everytime by adding 1 to  the last one */}
//             </div>

//         </div>
//     </div>
//   )
// }

// export default CreateProfile