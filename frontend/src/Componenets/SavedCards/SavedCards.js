import React from 'react'
import './SavedCard.css'
import NavigationTwo from '../Navigation/NavigationTwo'
const SavedCards = () => {
  return (
    <>
    <div className='saved-container'>
        <div className='saved-content'>
           <div className='saved-box'>
            <img src='https://res.cloudinary.com/dwiil16oj/image/upload/v1737625336/00_Back_card_upxqkz.jpg' className='saved-img'></img>
           </div>
           <div className='saved-description'>
            One-Card Reading
            yesterday ,06-feb-2025
           </div>
        </div>
      
    </div>
    <NavigationTwo link={'/home'}/>
    </>
  )
}

export default SavedCards
