import React from 'react'

function Hero() {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center px-10 text-light'>
        <div className='text-6xl font-medium'>Hello, I'm Jeffrey Vaughn!</div>
        <hr className='h-1  bg-ocean my-6 mx-auto w-14 border-black border-none rounded-md' />
        <div className='text-lg font-normal'>A fullstack developer based in Las Vegas, NV</div>
    </div>
  )
}

export default Hero;
