import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import amazon from "../../assets/brands/amazon.png";
import amazon_victor from "../../assets/brands/amazon_vector.png";
import casio from "../../assets/brands/casio.png";
import moonstar from "../../assets/brands/moonstar.png";
import randstad from "../../assets/brands/randstad.png";
import star from "../../assets/brands/star.png";
import start_people from "../../assets/brands/start_people.png";
import { Autoplay } from "swiper/modules";

const Brands = () => {
  const brandsImg = [
    amazon,
    amazon_victor,
    casio,
    moonstar,
    randstad,
    star,
    start_people,
  ];

  return (
   <div className="p-6">
     <Swiper
   
      slidesPerView={3}
      centeredSlides={true}
      spaceBetween={10}
      grabCursor={true}
      loop={true}
       autoplay={{
          delay: 500,
          disableOnInteraction: false,
        }}

        modules={[Autoplay]}
    >
      {brandsImg.map((logo) => (
        <SwiperSlide>
          <img src={logo} alt="" />
        </SwiperSlide>
      ))}
    </Swiper>
   </div>
  );
};

export default Brands;
