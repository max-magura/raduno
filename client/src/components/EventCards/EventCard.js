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
        var userInfo = JSON.parse(sessionStorage.getItem('userInfo'));
        if (userInfo !== null) {
            axios.get(`/myEvents/${userInfo.id}`).then(results => {
                // console.log(results.data.upcomingEvents);
                this.setState({
                    upcomingEvents: results.data.UpcomingEvents,
                    passedEvents: results.data.PassedEvents
                })
             });
        } else {
                console.log({Message: 'No User Info Found'});
        }
    }

    render() {
    return(
<div className="container">
    
    <Row>

<Col xs={12} md={6} lg={6}> 
    <Card className="upcomingEventCard text-center" style={{'max-height': 'calc(100vh - 210px)', 'overflow-y': 'auto', 'overflow-x': 'none'}}>
    
    <Card.Title className="text-center">Upcoming Events</Card.Title>
  
        <Card className="card" >
    
        {this.state.upcomingEvents.map((event, index) => {
            return <Card key={index} className="cardBody">
                Event Name: {event.eventName}
                <br></br>
                Days Away: {event.DaysAway}
            </Card>
        })}

        </Card>
    </Card>
</Col>

<Col xs={12} md={6} lg={6}>
    <Card className="pastEventCard text-center" style={{'max-height': 'calc(100vh - 210px)', 'overflow-y': 'auto', 'overflow-x': 'none'}}>
        <Card.Title className="text-center">Past Events</Card.Title>
  
        <Card className="card">
            
            {this.state.passedEvents.map((event, index) => {
             return <Card key={index} className="cardBody">
                Event Name: {event.eventName}
                <br></br>
                Days Away: {event.DaysAway}  
              </Card>
            })}
        </Card>     
    </Card>
</Col>
        </Row>
</div>
        )
    }   
}


export default EventCard;