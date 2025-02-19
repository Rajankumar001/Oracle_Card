import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import axios from 'axios';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import './DisplayingTwoCard.css';
import NavigationTwo from '../Navigation/NavigationTwo';
import Header from '../Header/Header';

const DisplayTwoCard = () => {
  const [cardData, setCardData] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [saveId,setSaveId]=useState([]);
  const [UserId,setUserId]=useState("");
  useEffect(() => {
    const storedData = localStorage.getItem('twoCards');
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setCardData(parsedData);
      setFlippedCards(Array(parsedData.length).fill(false));

    }
  }, []);
  const getLocalstorage=()=>{
    const storedUserData = localStorage.getItem('LoginUser');
    if (storedUserData) {
      const parsedUserData = JSON.parse(storedUserData);
      console.log("parse",parsedUserData);
      const mobile = parsedUserData.user.mobile;
      const Userid=parsedUserData.user._id;
      setUserId(Userid);
      console.log("id",Userid)
      const token = parsedUserData.token;
      console.log("Mobile:", mobile);
      console.log("Token:", token);
    } else {
      console.log("No userData found in localStorage.");
    }
  }
  useEffect(()=>{
   getLocalstorage();
  },[])

  const handleCardClick = (_id,index) => {
    // console.log("index",index);
    // if (flippedCards[index] < 1) {
    //   const newFlippedCards = [...flippedCards];
    //   newFlippedCards[index] = newFlippedCards[index] + 1;
    //   setFlippedCards(newFlippedCards);
    //   setSaveId([...saveId, _id]);
    // } else {
    //   alert("You have already accessed this card twice!");
    // }
    if (!flippedCards[index]) { //
    const newFlippedCards = [...flippedCards];
    newFlippedCards[index] = true; // Mark the card as flipped
    setFlippedCards(newFlippedCards);
    setSaveId([...saveId, _id]);
  } else {
    alert("You have already accessed this card!"); // Alert if trying to flip the card again
  }
    
  };
  console.log("SaveId",saveId);
  console.log("UserId........",UserId);
  const savedCard=async()=>{
    try{
      const res=await axios.put(`/api/User/updateuser/${UserId}`,{ savedcard: saveId });
      console.log("res data...",res.data);
      alert("Card-Reading saved successfully...🎉")
    }catch(err){
     console.log("err",err);
    }
  }

  return (
    <>
    <Header/>
      <div className='oneCard-container-displaying'>
        <h4 className='card-title'>Your Card </h4>
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
        <button className='save-card-button' onClick={()=>savedCard()}>Save Card</button>
      </div>
<NavigationTwo link={'/home'}/>
    </>
  );
};

export default DisplayTwoCard;
