import React from 'react';

function Contact() {
    return (
        <div className='contact-me'>
            <h2>Contact Me</h2>
            <div>
                <form>
                    <div>
                        <label htmlFor='name'>Name:</label>
                        <input type='text' id='name' name='name' placeholder='Your name...' />
                    </div>
                    <div>
                        <label htmlFor='email'>Email:</label>
                        <input type='email' id='email' name='lastname' placeholder='Your email...' />
                    </div>
                    <div>
                        <label htmlFor='message'>Message Me:</label>
                        <textarea id='message' name='message' placeholder='Ask me anything...'></textarea>
                    </div>
                    <button type='submit' className='submit'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Contact;