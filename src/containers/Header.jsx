import React from 'react'

function Header() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-cover bg-[url('{require('../img/hero-bg.png')} ')">
        <div className='text-6xl font-medium'>Hello, I'm Jeffrey Vaughn!</div>
        <hr className='h-1  bg-ocean my-6 mx-auto w-3/12' />
        <div className='text-lg font-normal'>A fullstack developer based in Las Vegas, NV</div>
    </div>
  )
}

export default Header