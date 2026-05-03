import React from 'react';
import { FaShippingFast } from 'react-icons/fa';

const Works = () => {
    return (
        <div className='mt-10 pb-10 mx-3 '>
            <h1 className='text-2xl font-bold mb-7'>How it Works</h1>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
             <div className=' p-6 rounded-3xl bg-white space-y-3'>
       
               <div className='text-6xl text-[#606060]'>
                   <FaShippingFast />
               </div>
              <h1 className='text-[20px] font-bold'>Booking Pick & Drop</h1>
              <p className='text-[#606060]'>
                From personal packages to business shipments — we deliver on time, every time
              </p>


            </div>
             <div className=' p-6 rounded-3xl bg-white'>
       
               <div className='text-6xl text-[#606060]'>
                   <FaShippingFast />
               </div>
              <h1 className='text-[20px] font-bold'>Booking Pick & Drop</h1>
              <p className='text-[#606060]'>
                From personal packages to business shipments — we deliver on time, every time
              </p>


            </div>
             <div className=' p-6 rounded-3xl bg-white'>
       
               <div className='text-6xl text-[#606060]'>
                   <FaShippingFast />
               </div>
              <h1 className='text-[20px] font-bold'>Booking Pick & Drop</h1>
              <p className='text-[#606060]'>
                From personal packages to business shipments — we deliver on time, every time
              </p>


            </div>
             <div className=' p-6 rounded-3xl bg-white'>
       
               <div className='text-6xl text-[#606060]'>
                   <FaShippingFast />
               </div>
              <h1 className='text-[20px] font-bold'>Booking Pick & Drop</h1>
              <p className='text-[#606060]'>
                From personal packages to business shipments — we deliver on time, every time
              </p>


            </div>
           </div>
        </div>
    );
};

export default Works;