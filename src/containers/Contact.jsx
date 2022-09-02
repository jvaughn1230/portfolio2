import React from 'react'

import Mailer from '../components/Mailer';
import Slash from '../components/Slash';

function Contact() {
  return (
    <div id='contact' className=' w-full flex flex-col items-center py-32 px-12'>
        <div className='px-6'>
          <h2 className='text-3xl font-medium text-center'>Let's Get in Touch!</h2>
          <Slash />
          <p className='text-base md:min-w-[538px] font-normal mb-12 text-center px-3 max-w-[588px]'>Want to chat about a project? Send me a messages and I will get back to you as soon as possible!</p>
        </div>

        <Mailer />
    </div>
  )
}

export default Contact