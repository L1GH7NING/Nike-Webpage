import React, { useState } from 'react';
import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons';
import { navLinks } from '../constants';

const Nav = () => {
  const [menu, setMenu] = useState(false);

  return (
    <header className='padding-x py-8 absolute z-50 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a href={item.href} className='font-montserrat leading-normal text-lg text-slate-gray'>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          <img
            src={hamburger}
            alt="hamburger"
            width={25}
            height={25}
            onClick={() => setMenu(!menu)}
          />
        </div>
        {menu && (
          <div className='min-w-sm  bg-gray-100 absolute top-24 right-4 z-50 rounded-md'>
            <ul className='flex flex-col items-center p-16 justify-center gap-8'>
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className='font-montserrat leading-normal text-lg text-black'>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Nav;
