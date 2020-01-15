import React, { Component } from 'react';
import './viewEvents.css';
import MainDishCard from '../../components/MainDishCard/MainDishCard';
import SideDishCard from '../../components/SideDishCard/SideDishCard';
import DessertDishCard from "../../components/DessertDishCard/DessertDishCard";
import EventNav from '../../components/EventNav/EventNav';
import axios from 'axios';
import {Col, Row} from 'react-bootstrap';

class viewEvents extends Component {

  componentDidMount() {
    // axios.get('/login').then(result => console.log(result.data));
  }


  render() {
    return (
      <div className="display-item-cards">
        
        {/* <EventNav /> */}
        <Row>
        <Col>
        <EventNav />
        <br></br>
        <MainDishCard dishesNeeded="3" description="Mains"/>
        </Col>
        <Col>
        <br></br>
        <SideDishCard dishesNeeded="6" description="Sides"/>
        </Col>
        <Col>
        <br></br>
        <DessertDishCard dishesNeeded="10" description="Desserts"/>
        </Col>
        </Row>
        
      </div>
    )
  }
}

export default viewEvents;

