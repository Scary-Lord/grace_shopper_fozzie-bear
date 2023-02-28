import React from 'react'

const Help = () => {
  return (
  <div>
		<h1>Please fill out the form below to get support via email</h1>
    <form>
      <label>Email:</label>
      <input name='email'/>

			<label>Your Name:</label>
			<input name='name'/>

			<label>Please describe your issue:</label>
			<input name='message'/>
    </form>
  </div>
  )
}

export default Help
