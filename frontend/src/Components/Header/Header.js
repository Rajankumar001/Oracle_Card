import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'; // for redirecting after logout
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './Header.css';
const Header = () => {
  // const User = useSelector((state)=>state.LoginReducer);
  // console.log("user...",User);
  // const {LoginUser} =User
  // console.log("user mobile...",LoginUser);
  const navigate = useNavigate(); // To navigate after logout

  const handleLogout = () => {
    localStorage.clear();  
    navigate('/');  
  };

  return (
    <>
      {['xxl'].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3 header-class-container">
          <div fluid className='header-class'>
            <Navbar.Brand href="/home" className='header-title'>ORACLE CARD</Navbar.Brand>
            {/* <p>{LoginUser.user}</p> */}
            
            <Button onClick={handleLogout} className="logout-button">
              Logout
            </Button>
          </div>
        </Navbar>
      ))}
    </>
  );
};

export default Header;
