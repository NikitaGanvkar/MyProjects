
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Container, Row, Col, Image, Button } from 'react-bootstrap';
import './css/Home.css';


export default class Home extends Component {
  render() {
    return (
      <Container>
        <Jumbotron>
          <h2>Home</h2>
        </Jumbotron>
      </Container>
    )
  }
}