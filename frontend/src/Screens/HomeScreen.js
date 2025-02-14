import React from 'react'
import './HomeScreen.css';
import mainCard from '../constants/mainCard';
import { Link } from 'react-router-dom';
import NavigationTwo from '../Componenets/Navigation/NavigationTwo';
import Header from '../Componenets/Header/Header';
const HomeScreen = () => {
  return (
    <>
     <Header/>
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
