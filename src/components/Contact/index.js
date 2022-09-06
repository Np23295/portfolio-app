import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

let Contact = (props) => {

    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [errorMessage, setErrorMessage] = useState('');

    const { name, email, message } = formState;
    function handleChange(e) {

        if (!e.target.value.length) {
            setErrorMessage(`${e.target.name} is required.`);
        } else {
            setErrorMessage('');
        }
        
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            }
        }

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
            <form id="contact-form" onSubmit={handleSubmit}>

                <div className="container">
                    {errorMessage && (
                        <div class="row overflow-hidden justify-content-center">
                            <p className="alert alert-danger">{errorMessage}</p>
                        </div>
                    )}
                    <div className="d-flex justify-content-center">
                        <label className="col-6 my-3" htmlFor="name"><h5 className="vertical-align-middle">Name</h5></label>
                        <input className="col-6 form-control" type="text" defaultValue={name} onBlur={handleChange} name="name" placeholder="Name" />
                    </div>
                    <div className="d-flex justify-content-center form-group">
                        <label className="col-6 my-3" htmlFor="email"><h5 className="vertical-align-middle">Email</h5></label>
                        <input className="col-6 form-control" name="email" defaultValue={email} onBlur={handleChange} placeholder="Email" />
                    </div>
                    <div className="d-flex justify-content-center form-group">
                        <label className="col-6 my-3" htmlFor="message"><h5 className="vertical-align-middle">Message</h5></label>
                        <textarea className="col-6 form-control" name="message" defaultValue={message} onBlur={handleChange} placeholder="Message"/>
                    </div>
                    <button data-testid="submitButton" type="submit" className="btn btn-primary col-3 mt-3">Submit</button>

                </div>
            </form>
        </section>
    );
}

export default Contact;