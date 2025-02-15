import React from 'react'
import './Navigation.css';
import back_arrow from '../../assets/back_arrow.png'
import About_section from '../../assets/about_section.png'
import shuffle from '../../assets/shuffle_card.png';
import change_animation from '../../assets/change_animation.png'
const Navigation = ({link,shuffleCards,onChange,link_about}) => {
  return (
    <div className='Navigation-container'>
      <div><a href={link}><img src={back_arrow} className='Navigation-image-style'></img></a></div>
      <div ><button className='shuffle-button' onClick={shuffleCards}><img src={shuffle} className='Navigation-image-style' alt="Shuffle" /></button></div>
      <div ><button className='shuffle-button'  onClick={onChange}><img src={change_animation} className='Navigation-image-style' alt="Shuffle" /></button></div>
      <div><a href={link_about}><img src={About_section} className='Navigation-image-style'></img></a></div>
    </div>
  )
}

export default Navigation
