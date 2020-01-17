import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Row, Col} from 'react-bootstrap';
import './DessertDishCard.css';
import ItemCardsItems from '../ItemCardItems/ItemCardItems';


class ItemCards extends Component {
  render() {
    return (
      <Card className="item-card center" style={{'max-height': 'calc(100vh - 210px)', 'overflow-y': 'auto', 'overflow-x': 'none'}}>
        <Col>
        <Card.Header className="item-card-header">
          <span className="description">{this.props.description}</span>
          <span className="quantity-needed">{this.props.dishesNeeded}<span style={{marginLeft: '5px'}}>Needed</span></span>
        </Card.Header>
        </Col>
        <Row>
          <Col>
        <Card.Body>
          <ItemCardsItems foodName="Cherry Pie" broughtBy="Joel Buentello"/>
          <ItemCardsItems foodName="Lemon Lie Pie" broughtBy="Max Magura"/>
          <ItemCardsItems foodName="Brownies" broughtBy="Scott Nelson"/>
          <ItemCardsItems foodName="Cookies" broughtBy="Austin Graves"/>
          <ItemCardsItems foodName="Cookies" broughtBy="Austin Graves"/>
          <ItemCardsItems foodName="Cookies" broughtBy="Austin Graves"/>
          
        </Card.Body>
        </Col>
        </Row>
      </Card>
    )
  }
}

export default ItemCards;


