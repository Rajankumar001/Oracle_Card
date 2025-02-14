import React from 'react'
import NavigationOne from '../Navigation/NavigationOne'
import './About.css';
import Header from '../Header/Header';
const About = () => {
  return (
    <>
    <Header/>
    <div className='About-container'>
      <div className='About-content'>
        <img src='https://res.cloudinary.com/dwiil16oj/image/upload/v1737625586/back_cover_JPEG_CMYK_rya2aa.jpg' className='About-content-img'></img>
      </div>
      <NavigationOne link={'/home'}/>
    </div>
</>
  )
}

export default About;
