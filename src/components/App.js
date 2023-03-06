import React from 'react';
import {Route, Routes } from "react-router-dom";
import { Contact, Help } from "../components/Footer";
import { CartPage, Confirmation } from "./checkout";

import Homepage from "./Homepage/Homepage";
import CreateProfile from "./CreateProfile/CreateProfile";
import Products from "./Products/Products";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsAsync } from '../reducers/product';
import { fetchUsersAsync } from '../reducers/users';
import {SingleProduct} from '../components/Products/SingleProduct'
import SignIn from './CreateProfile/sign_in';

function App() {
   const dispatch=useDispatch()
  React.useEffect(()=>{dispatch(fetchProductsAsync())},[dispatch])
  React.useEffect(()=>{dispatch(fetchUsersAsync())},[dispatch])

  return (
    <div className="App">


      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path='/products' element={<Products/>}/>
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/help" element={<Help />} />
        <Route path="/cartPage" element={<CartPage />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path='/createProfile' element={<CreateProfile />} />
        <Route path='/sign_in' element={<SignIn/>}/>
      </Routes>


    </div>
  );
}

export default App;
