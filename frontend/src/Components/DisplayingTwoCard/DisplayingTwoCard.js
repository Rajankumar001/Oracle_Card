import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ToastContainer, toast } from 'react-toastify';
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
  const [lastFlippedIndex, setLastFlippedIndex] = useState(null);
  const [lastFlippedDescription, setLastFlippedDescription] = useState("");
  const [lastFlippedname, setLastFlippedname] = useState(""); // 
    
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
    if (!flippedCards[index]) { //
    const newFlippedCards = [...flippedCards];
    newFlippedCards[index] = true; 
    setFlippedCards(newFlippedCards);
    setSaveId([...saveId, _id]);
    setLastFlippedIndex(index); // Update the last flipped index
    setLastFlippedDescription(cardData[index].description);
    setLastFlippedname(cardData[index].name); 
  } else {
    toast.error("You have already accessed this card!");
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
  // const renderCardDescription = () => {
  //   if (allFlipped) {
  //     const currentCard = cardData[currentCardIndex];
  //     setCurrentCardIndex(currentCardIndex + 1); 
  //     return (
  //       <div className="card-description">
  //         <h3>{currentCard.title}</h3>
  //         <p>{currentCard.description}</p>
  //       </div>
  //     );
  //   }
  //   return null;
  // };

  return (
    <>
    <Header/>
      <div className='twoCard-container-displaying'>
        {/* <h4 className='card-title'>Your Card </h4> */}
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
                    {/* {renderCardDescription()} */}
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

export default DisplayTwoCard;
