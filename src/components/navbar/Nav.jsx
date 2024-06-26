 import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


const NavBar = () => {
  const [expanded, setExpanded] = useState(false);
 
  return (
    <>
      <Navbar className="bg-black" expand="md" expanded={expanded} variant="dark">
        <Container>
          <Navbar.Brand href="#">
            <img
              alt=""
              src="lo.png"
              width="40"
              height="40"
              className="d-inline-block rounded-3 me-2"
            />{""}
            <a className="text-light text-decoration-none fs-6 fw-normal d-none d-sm-inline" href="#">made by</a>
            {'  '}
            <img className='d-none d-sm-inline' src="framer.png" alt="" />
          </Navbar.Brand>
          <Nav className='ms-auto'> 
              <button type="button" className="btn btn-light w-115 h-39 fs-6 me-3">Get for free</button>
            </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;

