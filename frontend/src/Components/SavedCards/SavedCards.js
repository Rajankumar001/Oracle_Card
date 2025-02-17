import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './SavedCard.css';
import NavigationTwo from '../Navigation/NavigationTwo';
import Header from '../Header/Header';

const SavedCards = () => {
  const [savedCards, setSavedCards] = useState([]); // State to store fetched cards
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(''); // Error state

  useEffect(() => {
    const fetchSavedCards = async () => {
      const loginId = localStorage.getItem('loginUser'); // Get loginId from localStorage
      if (!loginId) {
        setError('User not logged in');
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(`/api/saved-cards?loginId=${loginId}`);
        setSavedCards(response.data); // Set the fetched cards in the state
      } catch (err) {
        console.error('Error fetching saved cards:', err);
        setError('Failed to fetch saved cards');
      }
      setLoading(false);
    };

    fetchSavedCards();
  }, []); // Run the effect once on component mount

  return (
    <>
      <Header />
      <div className='saved-container'>
        {loading && <p>Loading...</p>} {/* Display loading state */}
        {error && <p>{error}</p>} {/* Display error if there's any */}
        {!loading && !error && savedCards.length === 0 && (
          <p>No saved cards found</p>
        )}
        <div className='saved-content'>
          {savedCards.map((card, index) => (
            <div key={index} className='saved-box'>
              <img src={card.imageUrl || 'https://res.cloudinary.com/dwiil16oj/image/upload/v1737625336/00_Back_card_upxqkz.jpg'} className='saved-img' alt="Card" />
              <div className='saved-description'>
                {card.title || 'No title'}<br />
                {new Date(card.createdAt).toLocaleDateString()} {/* Format the date */}
              </div>
            </div>
          ))}
        </div>
      </div>
      <NavigationTwo link={'/home'} />
    </>
  );
};

export default SavedCards;
