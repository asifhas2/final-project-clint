import React from "react";
import servicsImg from '../../assets/fi_8845507.png'

const OurServices = () => {
  return (
    <div className="border-2 p-8 md:p-10 lg:p-12 bg-[#03373D]">
      <div className="space-y-3 mb-8">
        <h1 className="text-2xl font-bold text-center text-white">Our Services</h1>
        <p className="text-[#e8d0d0] text-center">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle.From personal packages to business <br /> shipments — we
          deliver on time, every time.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        <div className=" p-6 rounded-3xl bg-white flex flex-col items-center justify-center space-y-3 hover:bg-[#CAEB66]">
          <div className="h-20 w-20 flex justify-center items-center  rounded-[100%] bg-gradient-to-b from-[#EEEDFC] to-[#f7f7f9d2] ">
           <img src={servicsImg} alt="" />
          </div>
          <h1 className="text-[20px] font-bold">Booking Pick & Drop</h1>
          <p className="text-[#606060]">
            From personal packages to business shipments — we deliver on time,
            every time
          </p>
        </div>
        <div className=" p-6 rounded-3xl bg-white flex flex-col items-center justify-center space-y-3 hover:bg-[#CAEB66]">
          <div className="h-20 w-20 flex justify-center items-center  rounded-[100%] bg-gradient-to-b from-[#EEEDFC] to-[#f7f7f9d2] ">
           <img src={servicsImg} alt="" />
          </div>
          <h1 className="text-[20px] font-bold">Booking Pick & Drop</h1>
          <p className="text-[#606060]">
            From personal packages to business shipments — we deliver on time,
            every time
          </p>
        </div>
        <div className=" p-6 rounded-3xl bg-white flex flex-col items-center justify-center space-y-3 hover:bg-[#CAEB66]">
          <div className="h-20 w-20 flex justify-center items-center  rounded-[100%] bg-gradient-to-b from-[#EEEDFC] to-[#f7f7f9d2] ">
           <img src={servicsImg} alt="" />
          </div>
          <h1 className="text-[20px] font-bold">Booking Pick & Drop</h1>
          <p className="text-[#606060]">
            From personal packages to business shipments — we deliver on time,
            every time
          </p>
        </div>
        <div className=" p-6 rounded-3xl bg-white flex flex-col items-center justify-center space-y-3 hover:bg-[#CAEB66]">
          <div className="h-20 w-20 flex justify-center items-center  rounded-[100%] bg-gradient-to-b from-[#EEEDFC] to-[#f7f7f9d2] ">
           <img src={servicsImg} alt="" />
          </div>
          <h1 className="text-[20px] font-bold">Booking Pick & Drop</h1>
          <p className="text-[#606060]">
            From personal packages to business shipments — we deliver on time,
            every time
          </p>
        </div>
        <div className=" p-6 rounded-3xl bg-white flex flex-col items-center justify-center space-y-3 hover:bg-[#CAEB66]">
          <div className="h-20 w-20 flex justify-center items-center  rounded-[100%] bg-gradient-to-b from-[#EEEDFC] to-[#f7f7f9d2] ">
           <img src={servicsImg} alt="" />
          </div>
          <h1 className="text-[20px] font-bold">Booking Pick & Drop</h1>
          <p className="text-[#606060]">
            From personal packages to business shipments — we deliver on time,
            every time
          </p>
        </div>
        <div className=" p-6 rounded-3xl bg-white flex flex-col items-center justify-center space-y-3 hover:bg-[#CAEB66]">
          <div className="h-20 w-20 flex justify-center items-center  rounded-[100%] bg-gradient-to-b from-[#EEEDFC] to-[#f7f7f9d2] ">
           <img src={servicsImg} alt="" />
          </div>
          <h1 className="text-[20px] font-bold">Booking Pick & Drop</h1>
          <p className="text-[#606060]">
            From personal packages to business shipments — we deliver on time,
            every time
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
