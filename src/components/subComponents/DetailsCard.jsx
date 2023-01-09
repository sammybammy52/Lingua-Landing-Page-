import React from 'react'

const DetailsCard = ({ image, bigText, smallText }) => {
  return (
    <div className='details-card w-[289px] '>
        <img src={image} className='mx-auto'/>
        <div className='text-center mt-[47px]'>
            <h3 className='details-title mb-[16px]'>{bigText}</h3>
            <p className='details-body'>{smallText}</p>
        </div>
    </div>
  )
}

export default DetailsCard