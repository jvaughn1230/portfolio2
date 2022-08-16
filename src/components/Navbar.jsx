import React from 'react'

function Navbar() {
  return (
    <nav className='flex py-5 justify-between content-center'>
        <div className='p4'>Logo</div>
        <div className=''>
            <a className='p-4' href='#skills'>Skills</a>
            <a className='p-4' href='#projects'>Projects</a>
            <a className='p-4' href='#contact'>Contact</a>
            <a className='p-4' href='#about' >About</a>
        </div>
    </nav>
  )
}

export default Navbar