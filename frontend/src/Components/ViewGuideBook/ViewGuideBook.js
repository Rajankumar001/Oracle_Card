import React from 'react';
import './ViewGuideBook.css'
import pdfUrl from '../../assets/guideBook.pdf'
import guideBook from '../../constants/GuideBook';
import { Link } from 'react-router-dom';
import NavigationTwo from '../Navigation/NavigationTwo';
import Header from '../Header/Header';
const ViewGuideBook = () => {

  return (
    <>
    <Header/>
    <div className='GuideBook-container'>
      <div className='guidebook-title'>
        <h2>GUIDEBOOK</h2>
      </div>
      <div className='guidebook-mainContent'>
      {
                guideBook && guideBook.map((item)=>(
                   
                   <div className='guide-box-content'>
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

export default ViewGuideBook
