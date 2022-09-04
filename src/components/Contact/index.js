import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

let Contact = (props) => {

    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [errorMessage, setErrorMessage] = useState('');

    const { name, email, message } = formState;
    function handleChange(e) {
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
        console.log('errorMessage', errorMessage);

        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
    }

    function handleSubmit(e) {
        console.log(formState, e.target.name);
        e.preventDefault();
    }

    return (
        <section>
            <h1 data-testid="h1tag">Contact me</h1>
            {/* <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" defaultValue={name} onBlur={handleChange} name="name" />
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input defaultValue={email} onBlur={handleChange} name="email" />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" defaultValue={message} rows="5" onBlur={handleChange} />
                </div>
                
                <button data-testid="submitButton" type="submit">Submit</button>
            </form> */}
            <form id="contact-form" onSubmit={handleSubmit}>
                {errorMessage && (
                    <div>
                        <p className="alert alert-danger">{errorMessage}</p>
                    </div>
                )}
                <div className="form-group">
                    <label htmlFor="name">Name: </label>
                    <input className="form-control" type="text" defaultValue={name} onBlur={handleChange} name="name" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input className="form-control" name="email" defaultValue={email} onBlur={handleChange} placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea className="form-control" name="message" defaultValue={message} onBlur={handleChange} />
                </div>
                <button data-testid="submitButton" type="submit" className="btn btn-primary">Submit</button>
            </form>
        </section>
    );
}

export default Contact;