import React from 'react';
import './CardSpread.css';
import Header from '../Header/Header';
import NavigationTwo from '../Navigation/NavigationTwo';
const UseOracle = () => {
  return (
   <>
   <Header/>
   <div className='Oracle_Card_Container'>
    <div className='Oracle_Card_Content'>
      <div className='Card_Content'>
        <h2 className='Card-title'>One Card Reading</h2>
        <div className='card-box-first'></div>
        <p>Stranded. Yes, she was now the first person ever to land on Venus, but that was of little consequence. Her name would be read by millions in school as the first to land here, but that celebrity would never actually be seen by her. She looked at the control
        </p>
      </div>
      <div className='Card_Content'>
      <h2 className='Card-title'>Two Card Reading</h2>
      <div className='box-contnet'>
      <div className='card-box'></div>
      <div className='card-box'></div>
      </div>
        <p>Stranded. Yes, she was now the first person ever to land on Venus, but that was of little consequence. Her name would be read by millions in school as the first to land here, but that celebrity would never actually be seen by her. She looked at the control
        </p>
      </div>
      <div className='Card_Content'>
      <h2 className='Card-title'>Three Card Reading</h2>
      <div className='box-contnet'>
      <div className='card-box'></div>
      <div className='card-box'></div>
      <div className='card-box'></div>
      </div>
        <p>Stranded. Yes, she was now the first person ever to land on Venus, but that was of little consequence. Her name would be read by millions in school as the first to land here, but that celebrity would never actually be seen by her. She looked at the control
        </p>
      </div>
      <div className='Card_Content'>
      <h2 className='Card-title'>Five Card Reading</h2>
      <div className='box-contnet'>
      <div className='card-box'></div>
      <div className='card-box'></div>
      <div className='card-box'></div>
      <div className='card-box'></div>
      <div className='card-box'></div>
      </div>
        <p>Stranded. Yes, she was now the first person ever to land on Venus, but that was of little consequence. Her name would be read by millions in school as the first to land here, but that celebrity would never actually be seen by her. She looked at the control
        </p>
      </div>
    </div>
    <NavigationTwo link={'/view-guidebook'}/>
   </div>
 
   </>
  )
}

export default UseOracle
