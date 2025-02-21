import React from 'react'
import './CardReading.css';

const CardReading = () => {
  return (
    <>
    <div className='CardReading-container'>
        <div className='CardReading-content'>
            <div className='CardReading-image'></div>
            <div className='CardReading-description'></div>
        </div>
        <div className='save-card-container'>
        <button className='save-card-button' onClick={()=>savedCard()}>Save Card</button>
         {/* <ToastContainer /> */}
      </div>
    </div>
   
    </>
  )
}

export default CardReading;
