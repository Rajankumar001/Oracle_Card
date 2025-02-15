import React from 'react'
import cardReading from '../../constants/cardReading';
import { Link } from 'react-router-dom';
import './cardReadingScreen.css'
import NavigationTwo from '../../Components/Navigation/NavigationTwo';
import Header from '../../Components/Header/Header';
const cardReadingScreen = () => {
  return (
    <>
    <Header/>
    <div className='cardReading-container'>
          <div className='cardReading-main-content'>
              {
                cardReading && cardReading.map((item)=>(
    
                   <div className='cardReading-box-content'>
                         <img src={process.env.PUBLIC_URL + item.image} className='image-style' alt={item.title} />
                      <Link to={item.link} className='link-style'>{item.title}</Link>
                    </div> 
                ))
              }
          </div>
          <NavigationTwo link={'/home'}/>
    </div>
    </>
  )
}

export default cardReadingScreen
