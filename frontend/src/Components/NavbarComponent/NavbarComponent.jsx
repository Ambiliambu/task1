import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

const NavbarComponent = () => {
  
  return (
    <div>
    <Navbar bg="primary" expand="sm" >
      <Container fluid>
        <Navbar.Brand className='fw-bold fs-2 text-light' >Elmex</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
      </Container> 
    </Navbar>
    </div>
  )
}

export default NavbarComponent
