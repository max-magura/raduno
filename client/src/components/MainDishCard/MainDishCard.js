import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Row, Col} from 'react-bootstrap';
import './MainDishCard.css';
import ItemCardsItems from '../ItemCardItems/ItemCardItems';


class ItemCards extends Component {
  render() {
    return (
      
      <Card className="item-card center">
        <Col>
        <Card.Header className="item-card-header">
          <span className="description">{this.props.description}</span>
          <span className="quantity-needed">{this.props.dishesNeeded}<span style={{marginLeft: '5px'}}>Needed</span></span>
        </Card.Header>
        </Col>
        <Row>
          <Col>
        <Card.Body>
          <ItemCardsItems foodName="Steak" broughtBy="Joel Buentello"/>
          <ItemCardsItems foodName="Chicken" broughtBy="Max Magura"/>
          <ItemCardsItems foodName="Shrimp" broughtBy="Scott Nelson"/>
          <ItemCardsItems foodName="Soup" broughtBy="Austin Graves"/>

        </Card.Body>
        </Col>
        </Row>
      </Card>
    )
  }
}

export default ItemCards;
