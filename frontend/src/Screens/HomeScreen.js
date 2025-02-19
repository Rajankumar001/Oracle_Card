import React ,{useEffect}from 'react'
import './HomeScreen.css';
import { useSelector } from 'react-redux';
import mainCard from '../constants/mainCard';
import { Link } from 'react-router-dom';
import NavigationTwo from '../Components/Navigation/NavigationTwo';
import Header from '../Components/Header/Header';





const HomeScreen = () => {
  const User=useSelector((state)=>state.LoginReducer);
console.log("User",User);
const {LoginUser} =User;
console.log("loginUser",LoginUser);
useEffect(()=>{
  const storedUserData = localStorage.getItem('LoginUser');
  if (storedUserData) {
    const parsedUserData = JSON.parse(storedUserData);
    console.log("parse",parsedUserData);
    const mobile = parsedUserData.user.mobile;
    console.log("id",parsedUserData.user._id)
    const token = parsedUserData.token;
    console.log("Mobile:", mobile);
    console.log("Token:", token);
  } else {
    console.log("No userData found in localStorage.");
  }
},[])
 
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
