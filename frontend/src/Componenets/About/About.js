import React from 'react'
import NavigationOne from '../Navigation/NavigationOne'
import './About.css';
const About = () => {
  return (
    <>
    <div className='About-container'>
      <div className='About-content'>
        <img src='https://res.cloudinary.com/dwiil16oj/image/upload/v1737625586/back_cover_JPEG_CMYK_rya2aa.jpg' className='About-content-img'></img>
      </div>
 
    </div>
         <NavigationOne link={'/home'}/>
</>
  )
}

export default About;
