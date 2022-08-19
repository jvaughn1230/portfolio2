import React, { useRef, useState } from 'react';

import emailjs from '@emailjs/browser';



    
const Mailer = () => {
    const[values, setValues] = useState({
        name: '',
        email: '',
        message: ''
    })

    const [status, setStatus] = useState('');

    const form = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_g6irf6a', 
            'template_dhr2msr', 
            form.current, 
            'ZbEPU1Szv0ExY3Urq')
            .then(
                res=>{
                console.log('SUCCESS!', res);
                setValues({
                    name: '',
                    email:'',
                    message:''
                });
                setStatus('SUCCESS')
            })
            .catch(
                err=>{
                    console.log('FAILED...', err);
                });
    }

    const handleChange = (e) => {
        setValues(values => ({
            ...values,
            [e.target.name] : e.target.value
        }));
    }

    return(
        <div>
            {status && alert()}
            <h1>Contact Form</h1>
            <form onSubmit={handleSubmit} ref={form}>

                <label>Name: </label>
                <input type='text' name='name' value={values.name} onChange={handleChange} placeholder='Enter Your Name'  required/>
            
                <label>Email:</label>
                <input type='email' name='email' value={values.email} onChange={handleChange} placeholder='Enter Your Email' required/>

                <label>Message</label>
                <textarea name='message' value={values.message} onChange={handleChange} rows='4' required />

                <input type='submit' value='Send' /> 

            </form>
        </div>
    );
}

const alert = () => {
    return(
       <div>
        <p>Your Message Submitted Successfully!</p>
    </div> )
} 
   
export default Mailer;