import React from 'react'
import './NavigationOne.css';
import back_arrow from '../../assets/back_arrow.png'
import About_section from '../../assets/about_section.png'
const NavigationOne = ({link}) => {
  return (
    <div className='Navigation-container-one'>
    <div><a href={link}><img src={back_arrow} className='Navigation-image-style'></img></a></div>
    {/* <div><a href='#'><img src={About_section} className='Navigation-image-style'></img></a></div> */}
  </div>
  )
}

export default NavigationOne