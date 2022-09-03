import React from 'react';

function Footer() {

  const year = new Date().getFullYear();

  return (
    <footer className='py-12 bg-slate-50 text-center'>
        Copyright {year} - Jeffrey Vaughn
    </footer>
  )
}

export default Footer