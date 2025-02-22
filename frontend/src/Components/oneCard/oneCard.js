import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';
import './oneCard.css';
import { EffectCoverflow, EffectCards, Pagination } from 'swiper/modules';
import Navigation from '../Navigation/Navigation';
import shuffleSound from '../../assets/shufflingCard.wav';
import Header from '../Header/Header';
import axios from 'axios';

export default function App() {
  const [cardData, setCardData] = useState([]);
  const [shuffledIndices, setShuffledIndices] = useState([]);
  const [isShuffling, setIsShuffling] = useState(false);
  const [isHighlighted, setIsHighlighted] = useState(false);
  const [change ,setChange]=useState(false);
  const [arrayOfObjects, setArrayOfObjects] = useState([]);
  const audioRef = React.useRef(null);

  const fetchCustomsData = async () => {
    try {
      const response = await axios.get("/api/savedcard/getcard");
      console.log("response data...", response.data);
      setCardData(response.data);
      setShuffledIndices(Array.from({ length: response.data.length }, (_, index) => index));
      console.log("response...", response);
    } catch (error) {
      console.error("Error fetching customs data:", error);
    }
  };

  useEffect(() => {
    fetchCustomsData();
  }, []);

  const onChange = () => {
    setChange(!change);
  };

  const shuffleCards = () => {
    const shuffled = shuffledIndices.slice();
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    setIsShuffling(true);

    setTimeout(() => {
      setIsShuffling(false);
      setShuffledIndices(shuffled);
    }, 1000);

    audioRef.current.play();
  };

  const Backend = (index) => {
    const dataId = cardData[index]._id;
    const frontImglink = cardData[index].frontImage;
    const backImglink = cardData[index].backImage;
    const description=cardData[index].Description;
    const name=cardData[index].name;
    const dataEntry1 = { _id: dataId, frontImage: frontImglink, backImage: backImglink,description:description,name:name};

    setIsHighlighted(!isHighlighted);
    setArrayOfObjects([dataEntry1]);
    localStorage.setItem('oneCard', JSON.stringify(arrayOfObjects));
    console.log("localStorage called..", localStorage.setItem('oneCard', JSON.stringify([dataEntry1])));
    window.location.href = '/displaying-onecard';
  };

  return (
    <>
      <Header />
      <div className='oneCard-container'>
        <Swiper
          effect={isShuffling || change ? 'cards' : 'coverflow'}
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
          modules={[EffectCoverflow, EffectCards, Pagination]}
          className="mySwiper"
        >
          {shuffledIndices.map((index) => (
            <SwiperSlide key={index}>
              <div className={`card ${isShuffling ? 'shuffle-animation' : ''}`} onClick={() => { Backend(index) }}>
                <img className='front' src={cardData[index].frontImage} alt="Front Image" />
                <img className='back' src={cardData[index].backImage} alt="Back Image" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={isHighlighted ? 'highlighted' : 'card-choosed-box'}>
        </div>
      </div>
      <Navigation link={'/begin-new-cards'} shuffleCards={shuffleCards} onChange={onChange} link_about={'/about'} />
      <audio ref={audioRef} src={shuffleSound} />
    </>
  );
}
