import React from 'react'
import T1 from '../assets/testimonials1.png'
import ESP from '../assets/esp.png';

const Testimonials = () => {
    return (
        <div className='testimonialsDiv mx-[100px]'>
            <div className="testimonials-header mb-[59px]">
                <p className='teachers-p'>top studying</p>
                <h1 className='teachers-h1'>Our students say</h1>
            </div>

            <div className="testimonials-body flex justify-between gap-[128px]">
                <div className="testimonials-image">
                    <img src={T1} />
                </div>

                <div className="testimonials-text">
                    <h3 className='testimonials-h3 mb-[19px]'>Martin Watson</h3>
                    <div className="flex mb-[50px]">
                        <img src={ESP}/>
                        <p className='slider-card-role mt-3'>B2 course student</p>
                    </div>
                    <p className='testimonials-p'>There is no way I could have made the same progress learning Spanish without using Lingua. The best part is now learning Spanish has become one of my biggest hobbies.</p>
                </div>
            </div>
        </div>
    )
}

export default Testimonials