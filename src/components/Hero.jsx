import React from 'react'

import Slash from './Slash';

function Hero() {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center px-10 text-light'>
        <div className='text-6xl font-medium'>Hello, I'm Jeffrey Vaughn!</div>
        <Slash />
        <div className='text-lg font-normal'>A fullstack developer based in Las Vegas, NV</div>
    </div>
  )
}

export default Hero;
