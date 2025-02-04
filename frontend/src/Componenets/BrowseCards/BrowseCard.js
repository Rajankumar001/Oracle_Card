import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { cardData } from '../../constants/CardData'
import { Pagination,} from 'swiper/modules';
import './BrowseCard.css';
import NavigationTwo from '../Navigation/NavigationTwo';
export default function BrowseCard() {
  return (
        <>
         <div className='BrowseCard-container'>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
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
                spaceBetween: 50,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
           
           {cardData.map((data,index) => (
            
                       <SwiperSlide key={index}>
                         <div className='card '>
                           <img className='back' src={data.backImage} alt="Back Image" />
                         </div>
                       </SwiperSlide>
                   
                     ))}
           
          </Swiper>
          </div>
          <NavigationTwo link={'/home'}/>
        
    </>
  );
}
