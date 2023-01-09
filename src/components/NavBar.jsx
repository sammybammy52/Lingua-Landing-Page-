import React from 'react'

import Logo from '../assets/Logo.png';

const NavBar = () => {
  return (
    <div className='px-[68px]'>
        <div className='grid grid-cols-4'>
            <div className='logoDiv my-[8px]'>
                <img src={Logo} />
            </div>
            <div className='navDiv col-span-2 flex justify-center my-[8px]'>
                <ul className='flex gap-[24px]'>
                    <li className='nav-links'>Courses</li>
                    <li className='nav-links'>About us</li>
                    <li className='nav-links'>Teachers</li>
                    <li className='nav-links'>Pricing</li>
                    <li className='nav-links'>Careers</li>
                    <li className='nav-links'>Blog</li>
                </ul>
            </div>
            <div className='btnDiv flex justify-end'>
                <button className='white-btn'>Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default NavBar