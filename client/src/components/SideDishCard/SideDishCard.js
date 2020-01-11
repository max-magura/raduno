import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Col, Row} from 'react-bootstrap';
import './SideDishCard.css';
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
          <ItemCardsItems foodName="French Fries" broughtBy="Joel Buentello"/>
          <ItemCardsItems foodName="Potatoes" broughtBy="Max Magura"/>
          <ItemCardsItems foodName="Steamed Broccoli" broughtBy="Scott Nelson"/>
          <ItemCardsItems foodName="Mashed Potatoes" broughtBy="Austin Graves"/>

        </Card.Body>
        </Col>
        </Row>
      </Card>
      
    )
  }
}

export default ItemCards;
