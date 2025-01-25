import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './oneCard.css';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import Navigation from '../Navigation/Navigation';
export default function App() {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://res.cloudinary.com/dwiil16oj/image/upload/v1737625336/00_Back_card_upxqkz.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://res.cloudinary.com/dwiil16oj/image/upload/v1737625336/00_Back_card_upxqkz.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://res.cloudinary.com/dwiil16oj/image/upload/v1737625336/00_Back_card_upxqkz.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://res.cloudinary.com/dwiil16oj/image/upload/v1737625336/00_Back_card_upxqkz.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://res.cloudinary.com/dwiil16oj/image/upload/v1737625336/00_Back_card_upxqkz.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://res.cloudinary.com/dwiil16oj/image/upload/v1737625336/00_Back_card_upxqkz.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://res.cloudinary.com/dwiil16oj/image/upload/v1737625336/00_Back_card_upxqkz.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://res.cloudinary.com/dwiil16oj/image/upload/v1737625336/00_Back_card_upxqkz.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://res.cloudinary.com/dwiil16oj/image/upload/v1737625336/00_Back_card_upxqkz.jpg" />
        </SwiperSlide>
      </Swiper>

      <Navigation link={'/begin-new-cards'}/>
    </>
  );
}
