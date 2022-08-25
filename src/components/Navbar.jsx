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
        <div className='p2 md:p4 font-bold text-xl'>Logo</div>

        <div className='hidden md:inline text-sm font-bold'>
            <a className='p-4 text-light' href='#skills'>Skills</a>
            <a className='p-4 text-light' href='#projects'>Projects</a>
            <a className='p-4 text-light' href='#contact'>Contact</a>
            <a className='p-4 text-light' href='#about' >About</a>
        </div>

        {/* `${toggleMenu ? 'block no-scroll h-screen bg-ocean': 'hidden'} m:w-1/3  w-full md:block md:bg-transparent flex flex-col justify-center z-40 absolute top-[-15px] left-0 md:static` */}

        {/* Mobile Menu */}
        <div className='inline md:hidden'>
          <GiHamburgerMenu onClick={()=>{setToggleMenu(!toggleMenu)}}/>
          {toggleMenu &&
            <div className={`toggleMenu ? no-scroll h-screen bg-ocean w-full left-0 absolute top-[0] flex flex-col items-center justify-around`}>
              <AiFillCloseCircle onClick={()=>{setToggleMenu(false)}} className='absolute right-5 top-5' />
              <a className='text-6xl' href='#about' onClick={()=>{setToggleMenu(false)}}>About</a>
              <a className='text-6xl' href='#skills' onClick={()=>{setToggleMenu(false)}}>Skills</a>
              <a className='text-6xl' href='#projects' onClick={()=>{setToggleMenu(false)}}>Projects</a>
              <a className='text-6xl' href='#contact' onClick={()=>{setToggleMenu(false)}}>Contact</a>
            </div>
          }
            
        </div>
    </nav>
    </div>

  )
}

export default Navbar