import React from 'react';
import {Modal, Button, Form} from 'react-bootstrap';
import '../styleModal.css';

function RsvpForm (props) {

  return(
    <Modal.Dialog>
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
      <Button variant="secondary">Close</Button>
      <Button className="btn btn-primary submit-btn">Submit</Button>
    </Modal.Footer>
  </Modal.Dialog>
  )

}


export default RsvpForm;
