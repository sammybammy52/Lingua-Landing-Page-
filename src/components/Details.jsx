import React from 'react'
import DetailsCard from './subComponents/DetailsCard'
import Ov1 from '../assets/ov1.png';
import Ov2 from '../assets/ov2.png';
import Ov3 from '../assets/ov3.png';


const Details = () => {
    return (
        <>
            <div className='detailsDiv px-[49px] mb-[240px] max-w-[1240px] mx-auto'>
                <div className="text text-center mb-[88.69px]">
                    <p className='details-text-1 mx-auto'>why choose us</p>
                    <h1 className='details-text-2 mx-auto'>Our values</h1>
                </div>

                <div className="cards flex gap-[138px]">
                    <DetailsCard image={Ov1} bigText="Speaking clubs" smallText="In our school you will practice your speaking skills and just get a lot of positive emotions!"/>
                    <DetailsCard image={Ov2} bigText="Quality control" smallText="A huge work has been done with the teachers and their work has been monitored thoroughly."/>
                    <DetailsCard image={Ov3} bigText="Progress analysis" smallText="The CEF of Reference has been used at our school. It allows to control our students’ success in studying."/>
                </div>
            </div>


        </>

    )
}

export default Details