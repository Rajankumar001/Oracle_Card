import React from 'react'
import './NavigationTwo.css';
import back_arrow from '../../assets/back_arrow.png'
import About_section from '../../assets/about_section.png'
const NavigationTwo = ({link}) => {
  return (
    <div className='Navigation-container-two'>
    <div><a href={link}><img src={back_arrow} className='Navigation-image-style'></img></a></div>
    <div><a href='#'><img src={About_section} className='Navigation-image-style'></img></a></div>
  </div>
  )
}

export default NavigationTwo
