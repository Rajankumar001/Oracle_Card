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

  const navigate = useNavigate(); 

  const handleLogout = () => {
    localStorage.clear();  
    navigate('/');  
  };

  return (
    <>
      {['xxl'].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3 header-class-container">
          <div fluid className='header-class'>
            <Navbar.Brand href="" className='header-title navbar-logo'>Angels On Earth</Navbar.Brand>
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
