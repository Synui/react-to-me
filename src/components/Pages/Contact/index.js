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
            // isValid conditional statement
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
        // The name property of target actually refers to the name attribute of the form element. 
        // This attribute value matches the property names of formState (name, email, and message) and allows us to use [ ] to create dynamic property names.
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
        // console.log('errorMessage', errorMessage);
    };
    // console.log(formState) is located outside the handleChange function declaration
    // because the asynchronous nature of the setFormState function will cause the console.log placed in the function body of handleChange to appear delayed in its ability to sync
    // console.log(formState);

    // front-end purposes only
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
                {/* Same as a conditional "if" statement.
                If errorMessage has a truthy value, the <div> block will render. 
                If errorMessage doesn't have an error message, the following <div> block doesn't render. 
                The && operator—known as the AND operator—is being used here as a short circuit. 
                If the first value resolves to true, the second expression is evaluated.*/}
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