import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Modal, Button, Form, Card, ListGroup} from 'react-bootstrap';
import "./EventNav.css";
import './styleModal.css';


class EventNav extends React.Component {

  state = {
    showRsvpForm: false,
    showEventInfo: false,
  };

  handleCloseRsvpForm  = event => {
   this.setState({showRsvpForm: false});
  };

  handleShowRsvpForm  = event => {
    this.setState({showRsvpForm: true});
   };

  handleCloseEventInfo  = event => {
   this.setState({showEventInfo: false});
  };

  handleShowEventInfo  = event => {
    this.setState({showEventInfo: true});
   };

  render() {
    return (
    <>
    <div className="containerMain">
    <Navbar expand="lg" className="colorEvent">
      <Navbar.Brand className="colorEvents" href="#">Events</Navbar.Brand>
        <div className="containerCount">
          <div className="invitedNum">
            Invited:
          </div>
            <div className="rsvpCount">
              RSVP:
            </div>
        </div>
          <div class="containerBtn">
            <Button className="eventButton" onClick={this.handleShowEventInfo}>Event Info</Button>
              <div className="userName">
                Hosted By: Austin Graves
              </div>
            <Button className="eventButton2" onClick={this.handleShowRsvpForm}>RSVP Here</Button>
          </div>
      </Navbar>
    </div>

    <Modal show={this.state.showRsvpForm} onHide={this.handleCloseRsvpForm}>
    <Modal.Header className="modalHeader" closeButton>
      <Modal.Title>Create Your Event</Modal.Title>
    </Modal.Header>

    <Modal.Body>
        <Form className="modalBody">

        <Form.Group>
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Name Here" />
        </Form.Group>

        <Form.Group>
          <Form.Label>Number of People in Your Party (total)</Form.Label>
          <Form.Control type="number" name="quantity" min="1" placeholder="1" />
        </Form.Group>

        <Form.Group>
          <Form.Label>Type of Dish</Form.Label>
          <Form.Control as="select">
            <option>Main</option>
            <option>Side</option>
            <option>Dessert</option>
          </Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label>Name of Dish</Form.Label>
          <Form.Control type="text" placeholder="Enter Name of Dish Here" />
        </Form.Group>

      </Form>
    </Modal.Body>

    <Modal.Footer className="modalFooter">
      <Button variant="secondary" onClick={this.handleCloseRsvpForm} >Close</Button>
      <Button className="btn btn-primary submit-btn">Submit</Button>
    </Modal.Footer>
    </Modal>

    <Modal show={this.state.showEventInfo} onHide={this.handleCloseEventInfo}>
    <Modal.Header className="modalHeader" closeButton>
      <Modal.Title>Event Information</Modal.Title>
    </Modal.Header>
  
    <Modal.Body>
      <Card>
        <Card.Body>
          <Card.Title>Event Name.props</Card.Title>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <b>Date:</b> this.props.date
              </ListGroup.Item>
              <ListGroup.Item>
                <b>Time:</b> this.props.time
              </ListGroup.Item>
              <ListGroup.Item>
                <b>Address:</b> this.props.address
              </ListGroup.Item>
              <ListGroup.Item>
                <b>Description:</b> this.props.description I'm testing this to see how much info about the event you can put in here. hopefully, it is a lot in case some people are super long winded. blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah.
              </ListGroup.Item>
            </ListGroup>
        </Card.Body>
      </Card>
          
    </Modal.Body>
  
    <Modal.Footer className="modalFooter">
      <Button variant="secondary" onClick={this.handleCloseEventInfo} >Close</Button>
    </Modal.Footer>
    </Modal>
    </>
    )
  }
};

export default EventNav;