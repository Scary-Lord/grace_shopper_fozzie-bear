import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from './Footer'

const Help = () => {
  return (
  <div className='helpPage'>
    <Navbar />
		<h1>Please fill out the form below to get support via email</h1>
    <form className='helpForm'>
      <label>Email:</label>
      <input name='email'/>

			<label>Your Name:</label>
			<input name='name'/>

			<label>Please describe your issue:</label>
			<input name='message'/>
    </form>
    <Footer />
  </div>
  )
}

export default Help
