import React from 'react'

import Mailer from '../components/Mailer';

function Contact() {
  return (
    <div id='contact' className=' w-full flex flex-col items-center'>
        <h2 className='text-3xl'>Let's Get in Touch!</h2>
        <p className='text-sm min-w-[538px]'>Want to chat about a project? Send me a messages and I will get back to you as soon as possible!</p>
        <Mailer />
    </div>
  )
}

export default Contact