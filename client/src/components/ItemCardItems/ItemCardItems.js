import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from 'react-bootstrap';
import './ItemCardItems.css'

class ItemCardItems extends Component {
  render() {
    return (
      <Card.Body className="item-card-item">
        <span className="food-name">{this.props.foodName}</span>
        <small className="person-bringing">Brought By: {this.props.broughtBy}</small>
      </Card.Body>
    )
  }
}

export default ItemCardItems;