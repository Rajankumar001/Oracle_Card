import React, { useEffect,useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './threeCard.css';
import axios from 'axios'
import { EffectCoverflow,EffectCards, Pagination } from 'swiper/modules';
import Navigation from '../Navigation/Navigation';
// import { cardData } from '../../constants/CardData';
import shuffleSound from '../../assets/shufflingCard.wav'; 
import Header from '../Header/Header';
const ThreeCard = () => {
  const [cardData,setCardData]=useState([]);
  const [shuffledIndices, setShuffledIndices] = useState([]);
  const fetchCustomsData = async () => {
    try {
      const response = await axios.get("/api/savedcard/getcard");
      console.log("response data...",response.data);
      setCardData(response.data);
      setShuffledIndices(Array.from({ length: response.data.length }, (_, index) => index));
      console.log("response...",response);
    } catch (error) {
      console.error("Error fetching customs data:", error);
    }
  };
  useEffect(() => {
    fetchCustomsData();
  }, []);
    const [isShuffling, setIsShuffling] = useState(false);
    const [selectedCards, setSelectedCards] = useState([]);
    const [arrayOfObjects, setArrayOfObjects] = useState([]);
    const [redirected, setRedirected] = useState(false);
    const [box1Selected, setBox1Selected] = useState(false);
    const [box2Selected, setBox2Selected] = useState(false);
    const [box3Selected, setBox3Selected] = useState(false);
    const [change ,setChange]=useState(false);
    const audioRef = React.useRef(null);
    const  onChange=()=>{
      setChange(!change);
    }
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
   
    const handleCardClick = (index) => {
        if (selectedCards.length < 3) {
          const selectedCard = cardData[index];
          if (selectedCards.some(card => card._id === selectedCard._id)) {
            alert('You have already chosen this card.');
            return;
          }
          setSelectedCards([...selectedCards, selectedCard]);
      
          if (selectedCards.length === 0) {
            setBox1Selected(true);
            console.log("First card selected.");
          } else if (selectedCards.length === 1) {
            setBox2Selected(true);
            console.log("Second card selected.");
          } else if (selectedCards.length === 2) {
            setBox3Selected(true);
            console.log("Third card selected.");
      
            setRedirected(true);
      
            const dataEntry1 = { _id: selectedCards[0]._id, frontImage: selectedCards[0].frontImage, backImage: selectedCards[0].backImage };
            const dataEntry2 = { _id: selectedCards[1]._id, frontImage: selectedCards[1].frontImage, backImage: selectedCards[1].backImage };
            const dataEntry3 = { _id: selectedCard._id, frontImage: selectedCard.frontImage, backImage: selectedCard.backImage };
            const combinedEntries = [dataEntry1, dataEntry2, dataEntry3];
      
            setArrayOfObjects(combinedEntries);
            localStorage.setItem('threeCards', JSON.stringify(combinedEntries));
            console.log("Stored in localStorage:", combinedEntries);
            setTimeout(() => {
              window.location.href = '/displaying-threeCard';
            }, 500);
          }
        }
      };
return (
  <>
  <Header/>
  <div className='oneCard-container'>
    <Swiper
       effect={change?'cards':'coverflow'}
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
       modules={[EffectCoverflow,EffectCards,Pagination]}
       className="mySwiper"
    >
      {shuffledIndices.map((index) => (
        <SwiperSlide key={index}>
          <div className={`card ${isShuffling ? 'shake-animation' : ''}`}  onClick={() => {handleCardClick(index)}}>
            <img className='front' src={cardData[index].frontImage} alt="Front Image" />
            <img className='back' src={cardData[index].backImage} alt="Back Image" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
    <div className='card-choosed-box-container'>
    <div className={`box-1 ${box1Selected ? 'selected' : 'box-1'}`}></div>
    <div className={`box-2 ${box2Selected ? 'selected' : 'box-2'}`}></div>
    <div className={`box-3 ${box3Selected ? 'selected' : 'box-3'}`}></div>
    </div>
  </div>
  <Navigation link={'/begin-new-cards'} shuffleCards={shuffleCards} onChange={onChange} link_about={'/about'} />
  <audio ref={audioRef} src={shuffleSound} />
</>
  )
}

export default ThreeCard
