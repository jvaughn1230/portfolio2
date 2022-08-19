import React, {useState} from 'react';

import {GiHamburgerMenu} from 'react-icons/gi';
import {AiFillCloseCircle} from 'react-icons/ai';

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [color, setColor] = useState(false);

  const changeColor = () => {
    if(window.scrollY >=20){
      setColor(true);
    } else {
      setColor(false);
    }
  }

  window.addEventListener('scroll', changeColor)
  
  return (
    <div className={`fixed px-10 py-5 w-full text-light mx-auto ${color && 'bg-white'} ${color && 'text-black'}`}>
        <nav className='flex justify-between content-center'>
        <div className='p4 font-bold text-xl'>Logo</div>

        <div className='hidden md:inline text-sm font-bold'>
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
    </div>

  )
}

export default Navbar