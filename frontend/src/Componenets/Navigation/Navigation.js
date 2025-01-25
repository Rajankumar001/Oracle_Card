import React from 'react'
import './Navigation.css';
import back_arrow from '../../assets/back_arrow.png'
import About_section from '../../assets/about_section.png'
import shuffle from '../../assets/shuffle.png';
import animation_change from '../../assets/animation_change.png';
import FontAwesomeIcon from 'react-icons'
const Navigation = ({link}) => {
  return (
    <div className='Navigation-container'>
      <div><a href={link}><img src={back_arrow} className='Navigation-image-style'></img></a></div>
      <div className='icon-container'><a href='#' className='icon-link'><i className="fa-duotone fa-regular fa-shuffle"></i></a></div>
      <div className='icon-container'><a href='#' className='icon-link'><i class="fa-regular fa-diagram-next "></i></a></div>
      <div><a href={link}><img src={About_section} className='Navigation-image-style'></img></a></div>
    </div>
  )
}

export default Navigation
