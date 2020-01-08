import React, { Component } from 'react';
import './viewEvents.css';
import MainDishCard from '../../components/MainDishCard/MainDishCard';
import SideDishCard from '../../components/SideDishCard/SideDishCard';
import DessertDishCard from "../../components/DessertDishCard/DessertDishCard";
import EventNav from '../../components/EventNav/EventNav';
import axios from 'axios';

class viewEvents extends Component {

  componentDidMount() {
    axios.get('/login').then(result => console.log(result.data));
  }


  render() {
    return (
      <div className="display-item-cards">
        {/* <EventNav /> */}
        <EventNav />
        <MainDishCard dishesNeeded="3" description="Mains"/>
        <SideDishCard dishesNeeded="6" description="Sides"/>
        <DessertDishCard dishesNeeded="10" description="Desserts"/>
      </div>
    )
  }
}

export default viewEvents;

