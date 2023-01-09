import React from 'react'
import HeroImg from '../assets/heroImg.png';
const Hero = () => {
  return (
    <div className='heroDiv flex justify-between'>
      <div className="textDiv ml-[68px] mt-[125px]">
          <div className="text mb-[32px]">
            <h1 className='hero-text-big'>A <span className='span-text'>unique</span> approach to learning foreign languages online</h1>
            <p className='hero-text-small'>Learn at your own pace, with lifetime access on mobile and desktop</p>
          </div>
          <button className='purple-btn'>Get Started</button>
      </div>

      <div className="imageDiv mr-[27px] mt-[36px]">
          <img src={HeroImg} />
      </div>
    </div>
  )
}

export default Hero