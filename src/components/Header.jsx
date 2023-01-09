import React from 'react'
import Hero from './Hero'
import NavBar from './NavBar'

const Header = () => {
  return (
    <div  className='mx-[32px] mt-[32px] mb-[200px] bg-[#FFF5F1] pt-[39px]  rounded-[40px]'>
        <NavBar/>
        <Hero/>
    </div>
  )
}

export default Header