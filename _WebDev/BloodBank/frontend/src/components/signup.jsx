import React, { Component } from 'react'
import { Jumbotron, Container, Col, Image } from 'react-bootstrap';
import './css/signup.css';

export default class Signup extends Component {
  render() {
    return (
      <Container>
        <Jumbotron>
          <h2>Signup</h2>
        </Jumbotron>
      </Container>
    )
  }
}