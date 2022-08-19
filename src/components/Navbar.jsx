import React, {useState} from 'react';

import {GiHamburgerMenu} from 'react-icons/gi';
import {AiFillCloseCircle} from 'react-icons/ai';

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className='flex py-5 justify-between content-center'>
        <div className='p4'>Logo</div>

        <div className='hidden md:inline'>
            <a className='p-4' href='#skills'>Skills</a>
            <a className='p-4' href='#projects'>Projects</a>
            <a className='p-4' href='#contact'>Contact</a>
            <a className='p-4' href='#about' >About</a>
        </div>

        <div className='inline md:hidden'>
          <GiHamburgerMenu onClick={()=>{setToggleMenu(!toggleMenu)}}/>
          {toggleMenu &&
            <div className='flex flex-col z-10 absolute'>
              <AiFillCloseCircle onClick={()=>{setToggleMenu(false)}} />
              <a className='p-4' href='#skills'>Skills</a>
              <a className='p-4' href='#projects'>Projects</a>
              <a className='p-4' href='#contact'>Contact</a>
              <a className='p-4' href='#about' >About</a>
            </div>
          }
            
        </div>
    </nav>
  )
}

export default Navbar