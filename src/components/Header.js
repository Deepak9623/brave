//import React from "react";
import React, { useState } from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.css';



const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <Navbar color="light" light expand="md" className='sticky-top'>
        <NavbarBrand href="/"><img
        src="/logonew.ico"
        alt="logoo"
        style={{
          height: 50,
          width: 50
        }}
      /></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="m-auto" navbar>
            <NavItem className='head-padd'>
              <NavLink href="/home">Home</NavLink>
            </NavItem>
            <NavItem className='head-padd'>
              <NavLink href="/services">Services</NavLink>
            </NavItem>
            <NavItem className='head-padd'>
              <NavLink href="/microsoft">Microsoft</NavLink>
            </NavItem>
            <NavItem className='head-padd'>
              <NavLink href="/aboutus">About Us</NavLink>
            </NavItem>
            <NavItem className='head-padd'>
              <NavLink href="/careers">Careers</NavLink>
            </NavItem>
            <NavItem className='head-padd'>
              <NavLink href="/contactus">Contact Us</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
  
  export default Header;
  
