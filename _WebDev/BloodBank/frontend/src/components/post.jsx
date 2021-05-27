import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col, Image, Form, Button } from 'react-bootstrap';
import './css/request.css';

export default class Request extends Component {
  render() {
    return (
      <Container>
        <br /><br /><br />
        <Jumbotron>
          <h1> Add Your Post </h1>
          <br />
          <Form>
            <Form.Group>
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" />
            </Form.Group>


            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Content</Form.Label>
              <Form.Control as="textarea" rows="3" />
            </Form.Group>


            <Form.Group>
              <Form.Label>Add an Image</Form.Label>
              <Form.File
                id="custom-file"
                label=""
                custom
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Created At</Form.Label>
              <Form.Control type="text" placeholder="20-01-20" />
            </Form.Group>

            <Form.Group >
              <Button type="submit">Submit</Button>
            </Form.Group>

          </Form>
        </Jumbotron>
      </Container>
    )
  }
}

