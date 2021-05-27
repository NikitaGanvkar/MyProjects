import React, { Component } from 'react'
import { Card , Jumbotron, Container, Col, Image, Button } from 'react-bootstrap';
import './css/blog.css';

export default class Blog extends Component {
  render() {
    return (
      <Container>
        <br /><br />
        <Jumbotron>
          <h1>Welcome to the Blog</h1>
          <Button href="/post" to="/post">Add New Post</Button> {' '}
        </Jumbotron>
        <Card>
          <Card.Header>Featured</Card.Header>
          <Card.Img variant="top" src="../assets/capsules.jpg" />
          <Card.Body>
            <Card.Title>Special title treatment</Card.Title>
             <Card.Text>
               With supporting text below as a natural lead-in to additional content.
             </Card.Text>
          </Card.Body>
        </Card>
        <br />
        
        <Card>
          <Card.Header>Featured</Card.Header>
          <Card.Img variant="top" src="../assets/capsules.jpg" />
          <Card.Body>
            <Card.Title>Special title treatment</Card.Title>
             <Card.Text>
               With supporting text below as a natural lead-in to additional content.
             </Card.Text>
          </Card.Body>
        </Card>
        <br />
      </Container>
    )
  }
}

