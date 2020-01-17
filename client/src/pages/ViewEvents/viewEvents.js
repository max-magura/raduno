import React, { Component } from 'react';
import './viewEvents.css';
import MainDishCard from '../../components/MainDishCard/MainDishCard';
import SideDishCard from '../../components/SideDishCard/SideDishCard';
import DessertDishCard from "../../components/DessertDishCard/DessertDishCard";
import EventNav from '../../components/EventNav/EventNav';
import axios from 'axios';
import {Col, Row} from 'react-bootstrap';

class viewEvents extends Component {

  state = {
    eventInfo: [],
    mainDishInfo: [],
    sideDishInfo: [],
    dessertInfo: [],
    rsvpInfo:[],
    isLoaded: false
  }

  componentDidMount() {
    var query = window.location.pathname;
    axios.get(query).then((results) => {
      console.log(results.data);
    this.setState({
        eventInfo: results.data.EventInfo,
        rsvpInfo: results.data.RsvpInfo, 
        mainDishInfo: results.data.RsvpInfo.filter(m => m.rsvpTypeofDish === "Main"),
        sideDishInfo: results.data.RsvpInfo.filter(m => m.rsvpTypeofDish === "Side"),
        dessertInfo: results.data.RsvpInfo.filter(m => m.rsvpTypeofDish === "Dessert"),
        isLoaded: true
      })
    })}


  render() {
    return (
      <>
      <div className="display-item-cards">
         {this.state.isLoaded === true ? 
         <div>
           <Row>
         <Col>
           <EventNav eventInfo={this.state.eventInfo} rsvpInfo={this.state.rsvpInfo}/>
           <br></br>
           <MainDishCard mainDishInfo={this.state.mainDishInfo} dishesNeeded={this.state.eventInfo[0].eventMainDishesNeeded} description="Mains" />
         </Col>
         <Col>
           <br></br>
           <SideDishCard sideDishInfo={this.state.sideDishInfo} dishesNeeded={this.state.eventInfo[0].eventSideDishesNeeded} description="Sides" />
         </Col>
         <Col>
           <br></br>
        <DessertDishCard dessertInfo={this.state.dessertInfo} dishesNeeded={this.state.eventInfo[0].eventDessertsNeeded} description="Desserts" />
      </Col>
      </Row></div>
      :<div>Loading</div>
         
         }
    </div>
    </>
    )
  }
}

export default viewEvents;

