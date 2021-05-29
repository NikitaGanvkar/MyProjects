import React, { Component } from 'react'
import {Jumbotron, Container, Col, Image } from 'react-bootstrap';
import './css/login.css';

export default class Login extends Component {
  render() {
    return (
      <Container>
        <Jumbotron>
          <h2>Login</h2>
        </Jumbotron>
      </Container>
    )
  }
}