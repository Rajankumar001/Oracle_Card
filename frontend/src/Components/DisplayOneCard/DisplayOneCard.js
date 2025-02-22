import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import axios from 'axios';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import './DisplayOneCard.css';
import NavigationTwo from '../Navigation/NavigationTwo';
import Header from '../Header/Header';

const DisplayOneCard = () => {
  const [cardData, setCardData] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
   const [saveId,setSaveId]=useState([]);
  const [UserId,setUserId]=useState("");
  const [lastFlippedIndex, setLastFlippedIndex] = useState(null);
  const [lastFlippedDescription, setLastFlippedDescription] = useState("");
  const [lastFlippedname, setLastFlippedname] = useState(""); // 

  useEffect(() => {
    const storedData = localStorage.getItem('oneCard');
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
    // if (flippedCards[index] <= 0) {
    //   const newFlippedCards = [...flippedCards];
    //   newFlippedCards[index] = newFlippedCards[index] + 1;
    //   setFlippedCards(newFlippedCards);
    //   setSaveId([...saveId, _id]);
    // } else {
    //   alert("You have already accessed this card Once!");
    // }
    if (!flippedCards[index]) { // Check if the card has not been flipped yet
      const newFlippedCards = [...flippedCards];
      newFlippedCards[index] = true; // Mark the card as flipped
      setLastFlippedIndex(index); // Update the last flipped index
      setLastFlippedDescription(cardData[index].description);
      setLastFlippedname(cardData[index].name);
      setFlippedCards(newFlippedCards);
      setSaveId([...saveId, _id]); 
      // setTimeout(()=>{
      // window.location.href='/card-reading'
      // },5000)
      
    } else {
      toast.error("You have already accessed this card!"); // Alert if trying to flip the card again
    }
  };
  console.log("SaveId",saveId);
  console.log("UserId........",UserId);
  const savedCard=async()=>{
    try{
      const res=await axios.put(`/api/User/updateuser/${UserId}`,{ savedcard: saveId });
      console.log("res data...",res.data);
      toast.success("Card-Reading saved successfully...🎉")
    }catch(err){
     console.log("err",err);
    }
  }

  return (
    <>
    <Header/>
      <div className='oneCard-container-displaying'>
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
      {lastFlippedIndex !== null && (
        <div className='cardReading-description-container'>
          <h2 className='carReading-name'>{lastFlippedname}</h2>
          <p className='cardReading-description'>{lastFlippedDescription}</p>
        </div>
      )}
      <div className='save-card-container'>
        <button className='save-card-button' onClick={()=>savedCard()}>Save Card</button>
         <ToastContainer />
      </div>
<NavigationTwo link={'/home'}/>
    </>
  );
};

export default DisplayOneCard;
