import React, { use } from "react";
import ReviedCard from "./ReviedCard";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Review = ({ reviewDataPromis }) => {
  const reviewData = use(reviewDataPromis);
  console.log(reviewData);

  return (
    <div className="space-y-3">
      <div className="text-center space-y-3">
        <h1 className="text-2xl font-bold">What our customers are sayings</h1>
        <p className="text-gray-400">
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce pain, and strengthen your body
          with ease!
        </p>
      </div>
<div className="py-10">
    
      <Swiper
      
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 50,
          stretch: '50%',
          depth: 200,
          modifier: 1,
          scale:0.75,
          slideShadows: true,
        }}
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination,Autoplay]}
        className="mySwiper"
      >
       
         {reviewData.map((data) => (
          <SwiperSlide>
            <ReviedCard data={data}></ReviedCard>
          </SwiperSlide>
        ))}
   
      </Swiper>
</div>
    </div>
  );
};

export default Review;
