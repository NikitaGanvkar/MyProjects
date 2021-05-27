import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col, Image, Form, Button } from 'react-bootstrap';
import './css/request.css';

export default class Request extends Component {
  render() {
    return (
      <Container>
        <br /><br /><br />
        <Jumbotron>
          <h1> Add New Requests </h1>
          <h5> Receive aid from our verified donors </h5>
          <br />
          <Form>
            <Form.Group>
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="John Doe" />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Description/Message</Form.Label>
              <Form.Control as="textarea" rows="3" />
            </Form.Group>

            <Form.Group>
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Blood Group</Form.Label>
              <Form.Control as="select">
                <option>Select</option>
                <option>A +ve</option>
                <option>B +ve</option>
                <option>AB +ve</option>
                <option>O +ve</option>
                <option>A -ve</option>
                <option>B -ve</option>
                <option>AB -ve</option>
                <option>O -ve</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="formHorizontalEmail">
              <Form.Label > Email  </Form.Label>
              <Form.Control type="email" placeholder="john@gmail.com" />
            </Form.Group>

            <Form.Group>
              <Form.Label>City</Form.Label>
              <Form.Control type="text" placeholder="Bangalore" />
            </Form.Group>

            <Form.Group>
              <Form.Label>Created At</Form.Label>
              <Form.Control type="text" placeholder="20-01-20" />
            </Form.Group>

            <Form.Group >
              <Button type="submit">Send Request</Button>
            </Form.Group>

          </Form>
        </Jumbotron>
      </Container>
    )
  }
}

