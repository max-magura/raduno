import React, { Component } from 'react';
import './viewEvents.css';
import MainDishCard from '../../components/MainDishCard/MainDishCard';
import SideDishCard from '../../components/SideDishCard/SideDishCard';
import DessertDishCard from "../../components/DessertDishCard/DessertDishCard";

class viewEvents extends Component {
  render() {
    return (
      <div className="display-item-cards">
        <MainDishCard dishesNeeded="3" description="Mains"/>
        <SideDishCard dishesNeeded="6" description="Sides"/>
        <DessertDishCard dishesNeeded="10" description="Desserts"/>
      </div>
    )
  }
}

export default viewEvents;
