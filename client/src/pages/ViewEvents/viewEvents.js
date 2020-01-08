import React, { Component } from 'react';
import './viewEvents.css';
import MainDishCard from '../../components/MainDishCard/MainDishCard';
import SideDishCard from '../../components/SideDishCard/SideDishCard';
import DessertDishCard from "../../components/DessertDishCard/DessertDishCard";
import EventNav from '../../components/EventNav/EventNav';
import AdminNav from '../../components/AdminNav/AdminNav';

class viewEvents extends Component {
  render() {
    return (
      <div className="display-item-cards">
        {/* <EventNav /> */}
        <AdminNav />
        <MainDishCard dishesNeeded="3" description="Mains"/>
        <SideDishCard dishesNeeded="6" description="Sides"/>
        <DessertDishCard dishesNeeded="10" description="Desserts"/>
      </div>
    )
  }
}

export default viewEvents;
