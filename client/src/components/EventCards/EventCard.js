import { Card, Row, Col } from 'react-bootstrap';
import React from 'react';
import './EventCard.css';

class EventCard extends React.Component{
    render() {
    return(
<div className="container">
    <Row>

        <Col>
<Card className="upcomingEventCard">
    <Card.Title>Upcoming Events</Card.Title>
  
  <Card className="card">
      <Card.Body className="cardBody">This is an upcoming event.</Card.Body>
  </Card>

  
</Card>
</Col>


<Col>

<Card className="pastEventCard">
    <Card.Title>Past Events</Card.Title>
  
  <Card className="card">
      <Card.Body className="cardBody">This is a past event.</Card.Body>
  </Card>

</Card>
</Col>

</Row>
</div>
        )
    }

}

export default EventCard;