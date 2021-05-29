import React, { Component } from 'react'
import ReactBootstrap, { Navbar, Nav, NavItem, Button, FormControl, Form, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './css/CustomNavbar.css'

export default class CustomNavbar extends Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/" to="/">BloodLines</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link  href="/request" to="/request">Make Request</Nav.Link>
            <Nav.Link  href="/blog" to="/blog">Blog</Nav.Link>
          </Nav>
          <Form inline>
          <Nav.Link  href="/login" to="/login">Login</Nav.Link>
          <Nav.Link  href="/signup" to="/signup">Signup</Nav.Link>
          <Nav.Link  href="/admin" to="/admin">Admin</Nav.Link>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      /*<Navbar default collapseOnSelect>
             <Navbar.Brand>
               <Link to="/">CodeLife</Link>
             </Navbar.Brand>
             <Navbar.Toggle />
      
           <Navbar.Collapse>
             <Nav pullRight>
               <NavItem eventKey={1} componentClass={Link} href="/" to="/">
                 Home
               </NavItem>
               <NavItem eventKey={2} componentClass={Link} href="/about" to="/about">
                 About
               </NavItem>
               <NavItem eventKey={3} componentClass={Link} href="/news" to="/news">
                 News
               </NavItem>
             </Nav>
           </Navbar.Collapse>
      </Navbar>*/
    )
  }
}