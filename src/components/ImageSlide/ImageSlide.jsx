import React from 'react';
import {Swiper,SwiperSlide,} from "swiper/react";
import  { Pagination } from 'swiper';

import ad1 from "../../assets/ad1.jpg"
import ad2 from "../../assets/ad2.jpg"
import ad3 from "../../assets/ad3.jpg"
import ad4 from "../../assets/ad4.jpg"
import ad5 from "../../assets/ad5.jpg";
import ad6 from "../../assets/ad6.jpg";
import ad7 from "../../assets/ad7.jpg";
import ad8 from "../../assets/ad8.jpg";
import "swiper/css"
import 'swiper/css/pagination';

import "./ImageSlide.css"

const ImageSlide = () => {
    
  return (
    <div className="imageslide container">
        <span className='imageslide-title'>Our Brands</span>
      <div className="swiper-images">
        <Swiper 
        modules={[ Pagination]}
        className='imageslide-slider'
        spaceBetween={180}
        slidesPerView={1}
        grabCursor={true}
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 330,
          },
        }}
        >
            <SwiperSlide>
           <img src={ad1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
           <img src={ad2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
           <img src={ad3} alt="" />
            </SwiperSlide>
            <SwiperSlide>
           <img src={ad4} alt="" />
            </SwiperSlide>
            <SwiperSlide>
           <img src={ad5} alt="" />
            </SwiperSlide>
            <SwiperSlide>
           <img src={ad6} alt="" />
            </SwiperSlide>
            <SwiperSlide>
           <img src={ad7} alt="" />
            </SwiperSlide>
            <SwiperSlide>
           <img src={ad8} alt="" />
            </SwiperSlide>
        </Swiper>
        </div>
    </div>
  )
}

export default ImageSlide