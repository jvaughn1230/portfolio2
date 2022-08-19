import React from 'react'

function About() {
  return (
    <div id='about' className='flex justify-center items-center'>
      <img src={require('../img/profile-modified.png')} alt='profile' className='mr-8 h-[376px] w-[376px] px-6 basis-1/3' />
      <div className='px-6 basis-2/3'>
        <div>About Me</div>
        <div>Hi, I'm Jeffrey a full stack web developer based in Las Vegas NV. I build beautiful webistes using a combination of React, HTML, CSS, Javascript, Bootstrap with Node.js and Express.js on the backend. I love solving complex problems and learning new things! When I'm not programming, I can usually be found out in nature. </div>
      </div>
    </div>
  )
}

export default About;
