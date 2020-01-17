import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Col, Row} from 'react-bootstrap';
import './SideDishCard.css';
import ItemCardsItems from '../ItemCardItems/ItemCardItems';


class ItemCards extends Component {

  state = {
    sideDishInfo: this.props.sideDishInfo
  };

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
        {this.state.sideDishInfo.map((dish, index) => (
          <Card.Body className="reduceGap" key={index}>
            <ItemCardsItems foodName={dish.rsvpNameofDish} broughtBy={dish.rsvpName}/>
          </Card.Body>
        ))} 
        </Col>
        </Row>
      </Card>
      
    )
  }
}

export default ItemCards;
