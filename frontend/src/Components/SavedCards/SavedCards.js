import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './SavedCard.css';
import NavigationTwo from '../Navigation/NavigationTwo';
import Header from '../Header/Header';

const SavedCards = () => {
  const [UserId, setUserId] = useState("");
  const [showCard, setShowCard] = useState([]);

  const getLocalstorage = () => {
    const storedUserData = localStorage.getItem('LoginUser');
    if (storedUserData) {
      const parsedUserData = JSON.parse(storedUserData);
      const Userid = parsedUserData.user._id;
      setUserId(Userid);
    } else {
      console.log("No Data in Savedcards.....😒.");
    }
  }

  useEffect(() => {
    getLocalstorage();

    const fetchData = async () => {
      try {
        const res = await axios.get(`/api/User/getbyid/${UserId}`);
        console.log("Response data of showed card", res.data);
        setShowCard(res.data.savedCards);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (UserId) {
      fetchData();
    }
  }, [UserId]);

  return (
    <>
      <Header />
      <div className='saved-container'>
        <div className='saved-content'>
          <div className='card-grid'>
            {showCard.map((data, index) => (
              <div className='content' key={index}>
                <img src={data.backImage} className='content-img' alt={`Card ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='load-saved-card'>
      <NavigationTwo link={'/home'} />
      </div>
    </>
  );
};

export default SavedCards;
