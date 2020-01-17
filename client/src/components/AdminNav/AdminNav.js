import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Modal, Button, Form} from 'react-bootstrap';
import "./AdminNav.css";
import './styleModal.css';
import axios from "axios";

class AdminNav extends React.Component {
  state = {
    showCreateEvent: false,
    eventName: "",
    eventDescription: "",
    eventDate: "",
    eventTime: "",
    eventLocationStreet: "",
    eventLocationCity: "",
    eventLocationState: "",
    eventLocationZipCode: 0,
    eventMainDishesNeeded: 0,
    eventSideDishesNeeded: 0,
    eventDessertsNeeded: 0,
    eventNumberInvited: 0    
  };

  handleCloseCreateEvent  = event => {
   this.setState({showCreateEvent: false});
   this.setState({
        eventName: "",
        eventDescription: "",
        eventDate: "",
        eventTime: "",
        eventLocationStreet: "",
        eventLocationCity: "",
        eventLocationState: "",
        eventLocationZipCode: "",
        eventMainDishesNeeded: 0,
        eventSideDishesNeeded: 0,
        eventDessertsNeeded: 0,
        eventNumberInvited: 0    
      });
  };

  handleShowCreateEvent  = event => {
    this.setState({showCreateEvent: true});
  };

  handleLogout = () => {
    axios.get('/redirect').then((results) => {
      console.log(results.data);
    })
  }


  handleInputChange = event => {
     const {name, value} = event.target;
     this.setState(
        {[name]:value}
      );
      console.log(this.state);
  }  

  sendEmailJS = () => {
    // console.log('Inside Send Email Function')
    var data = {
      service_id: 'raduno',
      template_id: 'raduno_email_template',
      user_id: 'user_IXhtnrmaOcstiR7H7xgSR',
      template_params: {
        'email': 'austingraves0727@gmail.com',  
        'Name': 'Test',
        'event_name': 'Test Event Name',
        'event_location': '101 East Main Street, Gallatin, TN 37066',
        'event_description': 'Blah Blah Blha',
        'event_date': '10/10/2020',
        'event_time': '7:00AM',
        'event_url': 'www.youtube.com'
      }
    };
    
    axios.post('https://api.emailjs.com/api/v1.0/email/send', data).then((results) => {
      console.log(results);
    }).catch((err) => {
      console.log(err);
    });
  }

  handleCreateEventFormSubmit = event => {
    if (userInfo !== null) {
      var userInfo = JSON.parse(localStorage.getItem('userInfo'));
      event.preventDefault();
      axios.post('/event/create', {
        user_id: userInfo.id,  
        eventName: this.state.eventName,
        eventDescription: this.state.eventDescription,
        eventDate: this.state.eventDate,
        eventTime: this.state.eventTime,
        eventLocationStreet: this.state.eventLocationStreet,
        eventLocationCity: this.state.eventLocationCity,
        eventLocationState: this.state.eventLocationState,
        eventLocationZipCode: this.state.eventLocationZipCode,
        eventMainDishesNeeded: this.state.eventMainDishesNeeded,
        eventSideDishesNeeded: this.state.eventSideDishesNeeded,
        eventDessertsNeeded: this.state.eventDessertsNeeded,
        eventNumberInvited: this.state.eventNumberInvited
      })
      .then((result) => {
        console.log(result.data);
        this.sendEmailJS();
      }).catch((error) => {
        console.log(error);
      });
      this.handleCloseCreateEvent();
    } else {
      axios.get('/redirect').then((results) => {
        console.log(results);
      })
    }
  }

  getZipCode = (str) => {
    var regex = /(^\d{5}$)|(^\d{5}-\d{4}$)/;
    if(regex.test(this.state.eventLocationZipCode)) {
    }
    else {
      alert("Please enter a valid zip code.");
      this.setState({eventLocationZipCode: ""});
    }
  }

  render() {

    return (
    <>
    <Navbar fixed="top" className="navbar color-adminNav admin-navbar" expand="lg" variant="light">
      <div className="myEvents">My Events</div>
        <div className="containerButton">
          <Button className="createEvent" onClick={this.handleShowCreateEvent}>Create Event</Button>
          <Button className="logoutButton" onClick={this.handleLogout} type="submit">Logout</Button>
        </div>
    </Navbar>

    <Modal show={this.state.showCreateEvent} onHide={this.handleCloseCreateEvent}>
    <Modal.Header className="modalHeader" closeButton>
      <Modal.Title>Create Your Event</Modal.Title>
    </Modal.Header>

    <Modal.Body style={{'max-height': 'calc(100vh - 210px)', 'overflow-y': 'auto'}}>
        <Form className="modalBody">

        <Form.Group>
          <Form.Label>Event Name</Form.Label>
          <Form.Control type="text" name="eventName" value={this.state.eventName} onChange={this.handleInputChange} placeholder="Christmas Karaoke 2020" />
        </Form.Group>

        <Form.Group>
          <Form.Label>Event Description</Form.Label>
          <Form.Control as="textarea" name="eventDescription" value={this.state.eventDescription} onChange={this.handleInputChange} rows="3" />
        </Form.Group>

        <Form.Group>
          <Form.Label>Date</Form.Label>
          <Form.Control type="date"name="eventDate" value={this.state.eventDate} onChange={this.handleInputChange} />
        </Form.Group>

        <Form.Group>
          <Form.Label>Time</Form.Label>
          <Form.Control type="time" name="eventTime" value={this.state.eventTime} onChange={this.handleInputChange} />
        </Form.Group>

        <Form.Group>
          <Form.Label>Location Street Address</Form.Label>
          <Form.Control type="text" name="eventLocationStreet" value={this.state.eventLocationStreet} onChange={this.handleInputChange} placeholder="123 Main St"/>
        </Form.Group>

        <Form.Group>
          <Form.Label>Location City</Form.Label>
          <Form.Control type="text" name="eventLocationCity" value={this.state.eventLocationCity} onChange={this.handleInputChange} placeholder="Nashville"/>
        </Form.Group>

        <Form.Group>
          <Form.Label>Location State</Form.Label>
            <Form.Control as="select" name="eventLocationState" value={this.state.eventLocationState} onChange={this.handleInputChange}>
              <option value="AL">Alabama</option>
              <option value="AK">Alaska</option>
              <option value="AZ">Arizona</option>
              <option value="AR">Arkansas</option>
              <option value="CA">California</option>
              <option value="CO">Colorado</option>
              <option value="CT">Connecticut</option>
              <option value="DC">District of Columbia</option>
              <option value="DE">Delaware</option>
              <option value="FL">Florida</option>
              <option value="GA">Georgia</option>
              <option value="HI">Hawaii</option>
              <option value="ID">Idaho</option>
              <option value="IL">Illinois</option>
              <option value="IN">Indiana</option>
              <option value="IA">Iowa</option>
              <option value="KS">Kansas</option>
              <option value="KY">Kentucky</option>
              <option value="LA">Louisiana</option>
              <option value="ME">Maine</option>
              <option value="MD">Maryland</option>
              <option value="MA">Massachusetts</option>
              <option value="MI">Michigan</option>
              <option value="MN">Minnesota</option>
              <option value="MS">Mississippi</option>
              <option value="MO">Missouri</option>
              <option value="MT">Montana</option>
              <option value="NE">Nebraska</option>
              <option value="NV">Nevada</option>
              <option value="NH">New Hampshire</option>
              <option value="NJ">New Jersey</option>
              <option value="NM">New Mexico</option>
              <option value="NY">New York</option>
              <option value="NC">North Carolina</option>
              <option value="ND">North Dakota</option>
              <option value="OH">Ohio</option>
              <option value="OK">Oklahoma</option>
              <option value="OR">Oregon</option>
              <option value="PA">Pennsylvania</option>
              <option value="RI">Rhode Island</option>
              <option value="SC">South Carolina</option>
              <option value="SD">South Dakota</option>
              <option value="TN">Tennessee</option>
              <option value="TX">Texas</option>
              <option value="UT">Utah</option>
              <option value="VA">Virginia</option>
              <option value="VT">Vermont</option>
              <option value="WA">Washington</option>
              <option value="WV">West Virginia</option>
              <option value="WI">Wisconsin</option>
              <option value="WY">Wyoming</option>
            </Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label>Location Zip Code</Form.Label>
          <Form.Control type="text" name="eventLocationZipCode" value={this.state.eventLocationZipCode} onChange={this.handleInputChange} placeholder="37212" onBlur={this.getZipCode}/>
        </Form.Group>

        <Form.Group>
          <Form.Label>Number of Main Dishes Needed</Form.Label>
          <Form.Control type="number" name="eventMainDishesNeeded" value={this.state.eventMainDishesNeeded} onChange={this.handleInputChange} min="0" placeholder="1"/>
        </Form.Group>

        <Form.Group>
          <Form.Label>Number of Side Dishes Needed</Form.Label>
          <Form.Control type="number" name="eventSideDishesNeeded" value={this.state.eventSideDishesNeeded} onChange={this.handleInputChange} min="0" placeholder="1"/>
        </Form.Group>

        <Form.Group>
          <Form.Label>Number of Desserts Needed</Form.Label>
          <Form.Control type="number" name="eventDessertsNeeded" value={this.state.eventDessertsNeeded} onChange={this.handleInputChange} min="0" placeholder="1"/>
        </Form.Group>

        <Form.Group>
          <Form.Label>Total Number of People Invited</Form.Label>
          <Form.Control type="number" name="eventNumberInvited" value={this.state.eventNumberInvited} onChange={this.handleInputChange} min="0" placeholder="1"/>
        </Form.Group> 

      </Form>
    </Modal.Body>

    <Modal.Footer className="modalFooter">
      <Button variant="secondary" onClick={this.handleCloseCreateEvent}>Close</Button>
      <Button className="btn btn-primary submit-btn" 
      disabled = {!(this.state.eventName
        // && this.state.eventDescription && this.state.eventTime && this.state.eventLocationStreet && this.state.eventLocationCity && this.state.eventLocationState && this.state.eventLocationZipCode && this.state.eventMainDishesNeeded && this.state.eventSideDishesNeeded && this.state.eventDessertsNeeded && this.state.eventNumberInvited
        )}
      variant="primary" type="submit" onClick={this.handleCreateEventFormSubmit}>Submit</Button>
    </Modal.Footer>

    </Modal>
    </>
    )
  }
};


export default AdminNav;
