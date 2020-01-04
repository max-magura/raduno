import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import "./EventNav.css";


class EventNav extends React.Component {
  render() {
    return (
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
            <Button className="eventButton" type="submit">Event Info</Button>
              <div className="userName">
                Hosted By: Austin Graves
              </div>
            <Button className="eventButton2" type="submit">RSVP Here</Button>
          </div>
      </Navbar>
    </div>
    )
  }
};

export default EventNav;