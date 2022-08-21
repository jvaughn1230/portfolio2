import React from 'react'

function About() {
  return (
    <div id='about' className='flex justify-center items-center bg-ocean py-32'>
      <div className='px-12 mx-auto'>
        <img src={require('../img/profile-modified.png')} alt='profile' className='mr-8 h-[376px] w-[376px] px-6 basis-1/3' />
        <div className='px-6 basis-2/3 whitespace-normal'>
          <div className='font-medium text-3xl'>About Me</div>
          <div className='font-normal text-base'>Hi, I'm Jeffrey a full stack web developer based in Las Vegas NV. I build beautiful webistes using a combination of React, HTML, CSS, Javascript, Bootstrap with Node.js and Express.js on the backend. I love solving complex problems and learning new things! When I'm not programming, I can usually be found out in nature. </div>
        </div>
      </div>
    </div>
  )
}

export default About;
