import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import benarPng1 from '../../assets/banner/banner1.png'
import benarPng2 from '../../assets/banner/banner2.png'
import benarPng3 from '../../assets/banner/banner3.png'
const Benar = () => {
    return (
         <Carousel >
                <div>
                    <img src={benarPng1} />
                 
                </div>
                <div>
                    <img src={benarPng2} />
                   
                </div>
                <div>
                    <img src={benarPng3} />
                  
                </div>
            </Carousel>
    );
};

export default Benar;