import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './Header.css';

const Header = () => {
  return (
    <>
    {  ['xxl'].map((expand) => (
      <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3 header-class-container">
        <div fluid  className='header-class'>
          <Navbar.Brand href="/home" className='header-title'>ORACLE CARD</Navbar.Brand>
        </div>
      </Navbar>
    ))}
  </>
  )
}

export default Header
