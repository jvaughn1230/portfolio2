import React, { useRef } from 'react';

import emailjs from '@emailjs/browser';


const Mailer = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_g6irf6a', 
            'template_dhr2msr', 
            form.current, 
            'ZbEPU1Szv0ExY3Urq')
            .then(
                res=>{
                console.log(res);
            })
            .catch(
                err=>{
                    console.log(err)
                });
    }

    return(
        <div>
            <h1>Contact Form</h1>
            <form onSubmit={sendEmail} ref={form}>

                <label>Name: </label>
                <input type='text' name='name' placeholder='Enter Your Name'  required/>
            
                <label>Email:</label>
                <input type='email' name='email' placeholder='Enter Your Email' required/>

                <label>Message</label>
                <textarea name='message' rows='4' required />

                <input type='submit' value='Send' /> 

            </form>
        </div>
    );
}


// function Mailer() {
//     const contactMe = () => {
      
//         const sendEmail = (e) => {
//           e.preventDefault();
      
//           emailjs.sendForm('service_g6irf6a', 'template_dhr2msr', e.target, 'ZbEPU1Szv0ExY3Urq')
//             .then(res => {
//                 console.log(res);
//             })
//             .catch(err => console.log(err));
//     }
    
//   return (
//     <div>
//         <h1>Contact Form</h1>
//         <form>

//             <label>Name: </label>
//             <input type='text' name='name' placeholder='Enter Your Name'  required/>
        
//             <label>Email:</label>
//             <input type='email' name='email' placeholder='Enter Your Email' required/>

//             <label>Message</label>
//             <textarea name='message' rows='4' required />

//             <input type='submit' value='Send' /> 

//         </form>
//     </div>
//   )
// }
// }

export default Mailer;