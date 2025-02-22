import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import { cardData } from '../../constants/CardData'
import { Pagination,} from 'swiper/modules';
import axios from'axios';
import './BrowseCard.css';
import Header from '../Header/Header'
import NavigationTwo from '../Navigation/NavigationTwo';
export default function BrowseCard() {
  const [cardData,setCardData]=useState([]);
  const fetchCustomsData = async () => {
    try {
      const response = await axios.get("/api/savedcard/getcard");
      console.log("response data...",response.data);
      setCardData(response.data);
      console.log("response...",response);
    } catch (error) {
      console.error("Error fetching customs data:", error);
    }
  };
  useEffect(() => {
    fetchCustomsData();
  }, []);
  return (
        <>
        <Header/>
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
            className="mySwiper swiper-browseCard"
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
