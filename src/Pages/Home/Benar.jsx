import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import benarPng1 from '../../assets/banner/banner1.png'
import benarPng2 from '../../assets/banner/banner2.png'
import benarPng3 from '../../assets/banner/banner3.png'
const Benar = () => {
    return (
        <div >
             <Carousel 
             autoPlay={true}
             infiniteLoop={true}
             >
                <div className=''>
                    <img className='relative z-1' src={benarPng1} />
                    <button className='btn bg-[#CAEB66] rounded-3xl  absolute z-2 bottom-4 md:bottom-12  left-2  '>Track Your Parcel</button>
                 
                </div>
                <div className=''>
                    <img className='relative z-1' src={benarPng2} />
                    <button className='btn bg-[#CAEB66] rounded-3xl  absolute z-2 bottom-4 left-2 md:bottom-12 '>Track Your Parcel</button>
                 
                </div>
                 <div className=''>
                    <img className='relative z-1' src={benarPng3} />
                    <button className='btn bg-[#CAEB66] rounded-3xl  absolute z-2 bottom-4 left-2  md:bottom-12'>Track Your Parcel</button>
                 
                </div>
            </Carousel>
        </div>
    );
};

export default Benar;