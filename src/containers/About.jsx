import React from 'react'

function About() {
  return (
    <div id='about' className='flex'>
      <img src={require('../img/profile-modified.png')} alt='profile' />
      <div>Summary</div>
    </div>
  )
}

export default About;
