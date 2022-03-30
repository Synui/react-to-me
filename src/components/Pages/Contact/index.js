import React, { useState } from 'react';
import { validateEmail } from '../../../utils/helper';

function Contact() {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [errorMessage, setErrorMessage] = useState('');

    const { name, email, message } = formState;

    function handleChange(e) {
        // This conditional statement says if the <input> is email, then validate the value of that input field with the validateEmail function and assign its return to isValid
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                if (!e.target.value.length) {
                    setErrorMessage(`${e.target.name} is required.`);
                } else {
                    setErrorMessage('');
                }
            }
        }
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
        // console.log('errorMessage', errorMessage);
    };
    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    };

    return (
        <section>
            <h1 data-testid="h1tag">Contact me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                {/* name input */}
                <div>
                    <label htmlFor="name" className='contact-form-label'>Name:</label>
                    <input type="text" id='name' defaultValue={name} onBlur={handleChange} name="name" placeholder='Your name...' />
                </div>
                {/* email input */}
                <div>
                    <label htmlFor="email" className='contact-form-label'>Email address:</label>
                    <input type="email" id='email' defaultValue={email} name="email" onBlur={handleChange} placeholder='Your email...' />
                </div>
                {/* message text area */}
                <div>
                    <label htmlFor="message" className='contact-form-label'>Message:</label>
                    <textarea name="message" id='message' defaultValue={message} onBlur={handleChange} rows="5" placeholder='Ask me anything...' />
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button type="submit" data-testid="button">Submit</button>
            </form>
        </section>
    );
}

export default Contact;