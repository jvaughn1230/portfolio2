import React from 'react'

function Navbar() {
  return (
    <nav className='flex pt-5 justify-between content-center'>
        <div className=''>Logo</div>
        <div className='w-100 flex justify-around'>
            <a href='#about'>About</a>
            <a href='#skills'>Skills</a>
            <a href='#projects'>Projects</a>
            <a href='#contact'>Contact</a>
        </div>
    </nav>
  )
}

export default Navbar