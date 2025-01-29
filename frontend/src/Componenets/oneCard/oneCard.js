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
  const [isHighlighted, setIsHighlighted] = useState(false);
  const [arrayOfObjects, setArrayOfObjects] = useState([]);
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
  const Backend=(index)=>{
       const dataId=cardData[index].id;
       console.log("dataId",dataId);
       const frontImglink=cardData[index].frontImage;
       console.log("frontImage",frontImglink);
       const backImglink=cardData[index].backImage;
       console.log("backImage",backImglink);
       const dataEntry1 = { id: dataId, frontImage:frontImglink, backImage: backImglink };
       setIsHighlighted(!isHighlighted);
       setArrayOfObjects([dataEntry1]);
       localStorage.setItem('oneCard',JSON.stringify(arrayOfObjects));
       console.log("localStorage called..",localStorage.setItem('oneCard',JSON.stringify([dataEntry1])));
       window.location.href='/displaying-onecard'
  }

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
              <div className={`card ${isShuffling ? 'shake-animation' : ''}`}  onClick={() => {Backend(index)}}>
                <img className='front' src={cardData[index].frontImage} alt="Front Image" />
                <img className='back' src={cardData[index].backImage} alt="Back Image" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={isHighlighted ? 'highlighted' : 'card-choosed-box'}>

        </div>
      </div>
      <Navigation link={'/begin-new-cards'} shuffleCards={shuffleCards} />
      <audio ref={audioRef} src={shuffleSound} />
    </>
  );
}
