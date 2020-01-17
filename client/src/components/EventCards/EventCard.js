import { Card, Row, Col } from 'react-bootstrap';
import React from 'react';
import './EventCard.css';

class EventCard extends React.Component{
    render() {
    return(
<div className="container">
    
    <Row>

      <Col xs={12} md={6} lg={6}> 
<Card className="upcomingEventCard text-center" style={{'max-height': 'calc(100vh - 210px)', 'overflow-y': 'auto', 'overflow-x': 'none'}}>
    
    <Card.Title className="text-center">Upcoming Events</Card.Title>
  
  <Card className="card" >
      
      <Card className="cardBody">This is an upcoming event. blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah</Card>
      
      <Card className="cardBody">upcoming</Card>
      <Card className="cardBody">upcoming</Card>
      <Card className="cardBody">upcoming</Card>
      <Card className="cardBody">upcoming</Card>
      <Card className="cardBody">upcoming</Card>
      <Card className="cardBody">upcoming</Card>

  </Card>

  
</Card>

</Col>


<Col xs={12} md={6} lg={6}>

<Card className="pastEventCard text-center" style={{'max-height': 'calc(100vh - 210px)', 'overflow-y': 'auto', 'overflow-x': 'none'}}>
    <Card.Title className="text-center">Past Events</Card.Title>
  
  <Card className="card">
      
      <Card className="cardBody">This is a past  past past paaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaast event.</Card>
      <Card className="cardBody">past</Card>
      <Card className="cardBody">past</Card>
      <Card className="cardBody">past</Card>
      <Card className="cardBody">past</Card>
      <Card className="cardBody">past</Card>
      
  </Card>

</Card>
</Col>

</Row>

</div>
        )
    }

}

export default EventCard;