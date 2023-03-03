import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from './Footer'

const Contact = () => {
  return (
  <div className='contactPage'>
    <Navbar />
    <h1>Please fill out the form below to contact us via email</h1>
    <form className='contactForm'>
      <label>Email:</label>
      <input name='email'/>

			<label>Your Name:</label>
			<input name='name'/>

			<label>Your Message:</label>
			<input name='message'/>
    </form>
		<h2>You can also contact us via phone toll free 24 hours a day at 1-800-555-5555</h2>
    <Footer />
  </div>
  )
}

export default Contact
