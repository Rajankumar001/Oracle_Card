import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './oneCard.css';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import Navigation from '../Navigation/Navigation';
import { cardData } from '../../constants/CardData';
import shuffleSound from '../../assets/shufflingCard.wav'; 

export default function App() {
  const [shuffledIndices, setShuffledIndices] = useState(Array.from({ length: cardData.length }, (_, index) => index));
  const [isShuffling, setIsShuffling] = useState(false);
  const audioRef = React.useRef(null);
  const shuffleCards = () => {
    const shuffled = shuffledIndices.slice();
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    audioRef.current.play();
    setIsShuffling(true);
    setTimeout(() => {
      setIsShuffling(false); 
    }, 1000); 
    setShuffledIndices(shuffled);
   
  };

  return (
    <>
      <div className='oneCard-container'>
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
          {shuffledIndices.map((index) => (
            <SwiperSlide key={index}>
              <div className={`card ${isShuffling ? 'shake-animation' : ''}`}  onClick={() => console.log(`Card clicked: ${index}`)}>
                <img className='front' src={cardData[index].frontImage} alt="Front Image" />
                <img className='back' src={cardData[index].backImage} alt="Back Image" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className='card-choosed-box'>

        </div>
      </div>
      <Navigation link={'/begin-new-cards'} shuffleCards={shuffleCards} />
      <audio ref={audioRef} src={shuffleSound} />
    </>
  );
}
