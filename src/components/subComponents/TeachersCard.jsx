import React from 'react'

const TeachersCard = ({ name, role, logo, image }) => {
    return (
        <div className='slider-card inline-block mr-[70px]'>
            <div className="slider-card-image mb-[40px]">
                <img src={image} />
            </div>
            <div className="slider-card-text">
                <h3 className='slider-card-name mb-[16px]'>{name}</h3>
                <div className="flex">
                    <img src={logo} />
                    <p className='slider-card-role mt-3'>{role}</p>
                </div>

            </div>

        </div>
    )
}

export default TeachersCard