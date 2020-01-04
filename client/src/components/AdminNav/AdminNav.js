import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Modal, Button, Form} from 'react-bootstrap';
import "./AdminNav.css";
import './styleModal.css';

class AdminNav extends React.Component {
  state = {
    showCreateEvent: false,
  };

  handleCloseCreateEvent  = event => {
   this.setState({showCreateEvent: false});
  };

  handleShowCreateEvent  = event => {
    this.setState({showCreateEvent: true});
   };

  render() {
    return (
    <>
    <Navbar className="navbar color-adminNav admin-navbar" expand="lg" variant="light">
      <Navbar.Brand href="#">My Events</Navbar.Brand>
      <Button className="createEvent" onClick={this.handleShowCreateEvent}>Create Event</Button>
      <Button className="align-right btn-primary2" type="submit">Logout</Button>
    </Navbar>

    <Modal show={this.state.showCreateEvent} onHide={this.handleCloseCreateEvent}>
    <Modal.Header className="modalHeader" closeButton>
      <Modal.Title>Create Your Event</Modal.Title>
    </Modal.Header>

    <Modal.Body>
        <Form className="modalBody">

        <Form.Group>
          <Form.Label>Event Name</Form.Label>
          <Form.Control type="text" placeholder="Christmas Karaoke 2020" />
        </Form.Group>

        <Form.Group>
          <Form.Label>Event Description</Form.Label>
          <Form.Control as="textarea" rows="2" />
        </Form.Group>

        <Form.Group>
          <Form.Label>Date</Form.Label>
          <Form.Control type="date" />
        </Form.Group>

        <Form.Group>
          <Form.Label>Time</Form.Label>
          <Form.Control type="time"/>
        </Form.Group>

        <Form.Group>
          <Form.Label>Location Street Address</Form.Label>
          <Form.Control type="text" placeholder="123 Main St"/>
        </Form.Group>

        <Form.Group>
          <Form.Label>Location City</Form.Label>
          <Form.Control type="text" placeholder="Nashville"/>
        </Form.Group>

        <Form.Group>
          <Form.Label>Location State</Form.Label>
          <Form.Control type="text" placeholder="Tennessee"/>
        </Form.Group>

        <Form.Group>
          <Form.Label>Location Zip Code</Form.Label>
          <Form.Control type="text" placeholder="37212"/>
        </Form.Group>

        <Form.Group>
          <Form.Label>Number of Main Dishes Needed</Form.Label>
          <Form.Control type="number" name="quantity" min="0"/>
        </Form.Group>

        <Form.Group>
          <Form.Label>Number of Side Dishes Needed</Form.Label>
          <Form.Control type="number" name="quantity" min="0"/>
        </Form.Group>

        <Form.Group>
          <Form.Label>Number of Desserts Needed</Form.Label>
          <Form.Control type="number" name="quantity" min="0"/>
        </Form.Group>

        <Form.Group>
          <Form.Label>Total Number of People Invited</Form.Label>
          <Form.Control type="number" name="quantity" min="0"/>
        </Form.Group>

      </Form>
    </Modal.Body>

    <Modal.Footer className="modalFooter">
      <Button variant="secondary" onClick={this.handleCloseCreateEvent}>Close</Button>
      <Button className="btn btn-primary submit-btn">Submit</Button>
    </Modal.Footer>

    </Modal>
    </>
    )
  }
};


export default AdminNav;
