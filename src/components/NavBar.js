import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import '../scss/NavBar.scss';
import '../scss/variables.scss';

const NavBar = () => {
    return (
        <div className="Navbar fluid">
           <>
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/">City Guide</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/">Paris</Nav.Link>
      <Nav.Link href="/">Venedig</Nav.Link>
    </Nav>

  </Navbar>
       </>
       </div>
    );
};




export default NavBar;
