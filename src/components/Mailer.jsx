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
        <div className='w-full'>
            {status && alert()}
            <form onSubmit={handleSubmit} ref={form} className='flex flex-col w-[80%] md:w-1/3 mx-auto'>
                <input type='text' name='name' value={values.name} onChange={handleChange} placeholder='Full Name' required className='rounded border-slate-500 border-[1px] my-4 leading-10 px-3 py-4' />   
                <input type='email' name='email' value={values.email} onChange={handleChange} placeholder='Email' required className='rounded border-slate-500 border-[1px] my-4 leading-10 py-4 px-3' />   
                <textarea name='message' value={values.message} onChange={handleChange} placeholder='Your Message' required className='rounded border-slate-500 border-[1px] my-4 h-24 pt-6 px-3 pb-2' />  
                <input type='submit' value='Send' className='rounded-full bg-[#03A89E] hover:bg-[#19FBED] my-4 h-16 text-white'/> 
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