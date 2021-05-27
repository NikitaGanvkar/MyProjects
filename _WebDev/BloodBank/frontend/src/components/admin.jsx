import React, { Component } from 'react'
import {Jumbotron, Container, Col, Image } from 'react-bootstrap';
import './css/login.css';

export default class Admin extends Component {
  render() {
    return (
      <Container>
        <Jumbotron>
          <h2>Admin</h2>
        </Jumbotron>
      </Container>
    )
  }
}