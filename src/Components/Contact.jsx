import React from 'react';

function Contact() {
  return (
    <div>
        <div id='contact'>
            <h1>CONTACT US</h1>
            <form>
                <input type="text" placeholder='Full Name' required />
                <input type="email" placeholder='Type Your E-Mail' required />
                <textarea placeholder='Write Here....' name='message'></textarea>
                <input type="submit" value='send'/>
            </form>
        </div>
    </div>
  )
}

export default Contact;