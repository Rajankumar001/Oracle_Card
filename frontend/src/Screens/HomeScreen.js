import React from 'react'
import './HomeScreen.css';
import mainCard from '../constants/mainCard';
import { Link } from 'react-router-dom';
const HomeScreen = () => {
  return (
    <div className='home-container'>
          <div className='home-main-content'>
              {
                mainCard && mainCard.map((item)=>(
                   
                   <div className='home-box-content'>
                      <Link to={item.link} className='link-style'>{item.title}</Link>
                    </div> 
                ))
              }
          </div>
    </div>
  )
}
export default HomeScreen;
