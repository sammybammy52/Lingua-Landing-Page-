import React from 'react'
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/solid'
import T1 from '../assets/t1.png';
import T2 from '../assets/t2.png';
import T3 from '../assets/t3.png';
import T4 from '../assets/t1.png';
import T5 from '../assets/t2.png';
import ENG from '../assets/eng.png';
import ITA from '../assets/ita.png';
import ESP from '../assets/esp.png';
import TeachersCard from './subComponents/TeachersCard';
const Teachers = () => {

    const data = [
        {
            name: "Christian Howard",
            role: "Italian Teacher",
            logo: ITA,
            image: T1
        },

        {
            name: "Sandra Wilson",
            role: "Spanish Teacher",
            logo: ESP,
            image: T2
        },

        {
            name: "Jimmy Cooper",
            role: "English Teacher",
            logo: ENG,
            image: T3
        },

        {
            name: "Sammy Bammy",
            role: "Russian Teacher",
            logo: ITA,
            image: T4
        },

        {
            name: "Seye Yemi-Olowolabi",
            role: "Yoruba Teacher",
            logo: ESP,
            image: T5
        },

        {
            name: "Edward Drinkwater",
            role: "English Teacher",
            logo: ENG,
            image: T3
        },







    ]

    function slideRight() {
        var slider = document.getElementById("slider-container");
        slider.scrollLeft = slider.scrollLeft + 435;
    }

    function slideLeft() {
        var slider = document.getElementById("slider-container");
        slider.scrollLeft = slider.scrollLeft - 435;
    }
    return (
        <div className='teachersDiv mx-[100px] max-w-[1240px] mb-[240px]'>
            <div className="teachers-header flex justify-between mb-[59px]">
                <div className="textDiv">
                    <p className='teachers-p'>key persons</p>
                    <h1 className='teachers-h1'>Meet our teachers</h1>
                </div>

                <div className="teachers-buttons flex gap-[30px] pt-8">
                    <ChevronLeftIcon className='h-[56px] w-[56px] rounded-[40px]  border-2 p-[10px] text-gray-400 hover:scale-110 transition-all' onClick={slideLeft} />
                    <ChevronRightIcon className='h-[56px] w-[56px] rounded-[40px] border-2 p-[10px] bg-[#524FD5] text-white hover:scale-110 transition-all' onClick={slideRight} />
                </div>
            </div>

            <div id="slider-container">

                {
                    data.map((item) => (
                        <TeachersCard
                        name={item.name}
                        role={item.role}
                        logo={item.logo}
                        image={item.image} />
                    ))
                }
                <TeachersCard
                    name="Sandra Wilson"
                    role="Spanish Teacher"
                    logo={ESP}
                    image={T2} />

                <TeachersCard
                    name="Sandra Wilson"
                    role="Spanish Teacher"
                    logo={ESP}
                    image={T2} />

                <TeachersCard
                    name="Sandra Wilson"
                    role="Spanish Teacher"
                    logo={ESP}
                    image={T2} />

                <TeachersCard
                    name="sammy bammy"
                    role="Yoruba Teacher"
                    logo={ESP}
                    image={T2} />

                <TeachersCard
                    name="Sandra Wilson"
                    role="Spanish Teacher"
                    logo={ESP}
                    image={T2} />

                <TeachersCard
                    name="Sandra Wilson"
                    role="Spanish Teacher"
                    logo={ESP}
                    image={T2} />
            </div>
        </div>
    )
}

export default Teachers