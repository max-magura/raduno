import React from 'react';
import {Modal, Button, Card, ListGroup} from 'react-bootstrap';
import '../styleModal.css';

function EventInfo (props) {

  return(
    <Modal.Dialog>
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
      <Button variant="secondary">Close</Button>
    </Modal.Footer>
  </Modal.Dialog>
  )

}

export default EventInfo;