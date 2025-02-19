import React from 'react'
import './HomeScreen.css';
import { useSelector } from 'react-redux';
import mainCard from '../constants/mainCard';
import { Link } from 'react-router-dom';
import NavigationTwo from '../Components/Navigation/NavigationTwo';
import Header from '../Components/Header/Header';

const HomeScreen = () => {
 
  return (
    <>
     <Header />
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
          <NavigationTwo link={'/'}/>
    </div>
    </>
    
  )
}
export default HomeScreen;
