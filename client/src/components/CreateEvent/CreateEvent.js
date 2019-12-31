import React from 'react';
import {Modal, Button, Form} from 'react-bootstrap';
import '../styleModal.css';


function CreateEvent (props) {

  return(
    <Modal.Dialog>

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
          <Form.Label>Location</Form.Label>
          <Form.Control type="text" placeholder="Christmas Karoake 2020" />
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



        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Example select</Form.Label>
          <Form.Control as="select">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
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


export default CreateEvent;
