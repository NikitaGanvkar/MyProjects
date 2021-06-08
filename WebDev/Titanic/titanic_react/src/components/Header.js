import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import {  Navbar, NavbarBrand, Nav, NavbarToggler, Collapse,} from 'reactstrap';

class Header extends Component {
  render() {
    return (
      <Navbar expand="lg">
        <NavLink to="/">
          <NavbarBrand href=""></NavbarBrand>
        </NavLink>
        <NavbarToggler aria-controls="basic-navbar-nav" />
        <Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default Header;




