import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import './DisplayingTwoCard.css';
import NavigationTwo from '../Navigation/NavigationTwo';
import Header from '../Header/Header';

const DisplayTwoCard = () => {
  const [cardData, setCardData] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [saveId,setSaveId]=useState([]);
  useEffect(() => {
    const storedData = localStorage.getItem('twoCards');
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setCardData(parsedData);
      setFlippedCards(Array(parsedData.length).fill(false));

    }
  }, []);

  const handleCardClick = ({_Id,index}) => {
    const newFlippedCards = [...flippedCards];
    newFlippedCards[index] = !newFlippedCards[index];
    setFlippedCards(newFlippedCards);
    const newSaveId=[..._Id];
    console.log("newsaveId",newSaveId);
    setSaveId(newSaveId);
    
  };
  console.log("SaveId",saveId);

  return (
    <>
    <Header/>
      <div className='oneCard-container-displaying'>
        <h4 className='card-title'>Your Card 👇</h4>
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
          {cardData.map((data, index) => (
            <SwiperSlide key={index}>
              <div className={`card ${flippedCards[index] ? 'flipped' : ''}`} onClick={() => handleCardClick(data._id,index)}>
                <div className='card-inner'>
                  <div className='card-front'>
                    <img className='front' src={data.frontImage} alt="Front Image" />
                  </div>
                  <div className='card-back'>
                    <img className='back' src={data.backImage} alt="Back Image" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className='save-card-container'>
        <button className='save-card-button'>Save Card</button>
      </div>
<NavigationTwo link={'/home'}/>
    </>
  );
};

export default DisplayTwoCard;
