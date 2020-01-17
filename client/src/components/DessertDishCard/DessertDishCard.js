import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Row, Col} from 'react-bootstrap';
import './DessertDishCard.css';
import ItemCardsItems from '../ItemCardItems/ItemCardItems';


class ItemCards extends Component {

  state = {
    dessertInfo: this.props.dessertInfo
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
          {this.state.dessertInfo.map((dish, index) => (
          <Card.Body key={index}>
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


