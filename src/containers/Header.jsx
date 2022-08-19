import React from 'react';

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';

function Header() {
  return (
    <div className='hero-bg'>
      <Navbar />
      <Hero />
    </div>
  );
}

export default Header;
