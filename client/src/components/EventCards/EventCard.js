import { Card, Row, Col } from 'react-bootstrap';
import React from 'react';
import './EventCard.css';
import axios from 'axios';
class EventCard extends React.Component{
    state = {
        upcomingEvents: [],
        passedEvents: []
    };
    componentDidMount() {
        var userInfo = JSON.parse(localStorage.getItem('userInfo'));
        if (userInfo !== null) {
            axios.get(`/myEvents/${userInfo.id}`).then(results => {
                // console.log(results.data.upcomingEvents);
                this.setState({
                    upcomingEvents: results.data.UpcomingEvents,
                    passedEvents: results.data.PassedEvents
                })
             });
        } else {
            axios.get('/redirect').then((results) => {
                console.log(results);
            });
        }
      
      
    }
    render() {
    return(
    <div className="container">
        <Row>
            <Col>
                <Card className="upcomingEventCard">
                    <Card.Title>Upcoming Events</Card.Title>
                    {this.state.upcomingEvents.map((event, index) => (
                         <Card key={index} className="card">
                         {/* <Card.Body className="cardBody">This is an upcoming event.</Card.Body> */}
                         <Card.Body className="item-card-item">
                            <span >{event.eventName}</span>
                            <br></br>
                        <small>Days Away: {event.DaysAway}</small>
                        </Card.Body>
                        </Card>
                    ))}
                {/* <Card className="card">
                 <Card.Body className="cardBody">This is an upcoming event.</Card.Body>
                 <Card.Body className="item-card-item">
                    <span >{this.state.upcomingEvents[0].id}</span>
                    <small>Days Away: n/a</small>
                </Card.Body>


                </Card> */}

  
                </Card>
</Col>


<Col>

<Card className="pastEventCard">
    <Card.Title>Past Events</Card.Title>
  {this.state.passedEvents.map((event, index) => (
    <Card key={index} className="card">
    <Card.Body className="cardBody">{event.eventName}</Card.Body>
    <small>Days Away: {event.DaysAway}</small>
    </Card>
  ))}
  

</Card>
</Col>

</Row>
</div>
        )
    }

}

export default EventCard;