import React from 'react';
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
  const navigate = useNavigate(); // To navigate after logout

  const handleLogout = () => {
    localStorage.clear();  // Clears all data from localStorage
    navigate('/');  // Redirect to login page
  };

  return (
    <>
      {['xxl'].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3 header-class-container">
          <div fluid className='header-class'>
            <Navbar.Brand href="/home" className='header-title'>ORACLE CARD</Navbar.Brand>
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
