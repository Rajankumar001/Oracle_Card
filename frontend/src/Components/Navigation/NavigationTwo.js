// import React from 'react'
// import './NavigationTwo.css';
// import back_arrow from '../../assets/back_arrow.png'
// import About_section from '../../assets/about_section.png'
// const NavigationTwo = ({link}) => {
//   return (
//     <div className='Navigation-container-two'>
//     <div><a href={link}><img src={back_arrow} className='Navigation-image-style'></img></a></div>
//     <div><a href='/about'><img src={About_section} className='Navigation-image-style'></img></a></div>
//   </div>
//   )
// }

// export default NavigationTwo
import React from "react";
import "./NavigationTwo.css";
import back_arrow from "../../assets/back_arrow.png";
import About_section from "../../assets/about_section.png";

const NavigationTwo = ({ link }) => {
  
  const handleSave = async () => {
    const storedUser = localStorage.getItem("LoginUser"); // Get stored user data
const parsedUser = storedUser ? JSON.parse(storedUser) : null; // Parse JSON
const loginId = parsedUser?.user?._id; // Extract the _id


    if (!loginId) {
      alert("User has not logged in!");
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/api/saved-cards/save-card", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ loginId }),
      });

      const data = await response.json();
      console.log("data",data);;'/'
      alert("Card saved successfully!");
    } catch (error) {
      console.error("Error saving card:", error);
    }
  };

  return (
    <div className="Navigation-container-two">
      <div>
        <a href={link}>
          <img src={back_arrow} className="Navigation-image-style" alt="Back" />
        </a>
      </div>
      <div>
        <a href="/about">
          <img src={About_section} className="Navigation-image-style" alt="About" />
        </a>
      </div>
    </div>
  );
};

export default NavigationTwo;