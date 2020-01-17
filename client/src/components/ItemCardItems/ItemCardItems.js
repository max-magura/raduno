import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Row, Col, Container} from 'react-bootstrap';
import './ItemCardItems.css'

class ItemCardItems extends Component {
  render() {
    return (
      <Card.Body className="item-card-item cardBody text-center">
        
        <Row>
        <Col className="food-name ">
          
          {this.props.foodName}
          
          
          </Col>
        <Col className="person-bringing">
          
        
          Brought By: {this.props.broughtBy}
          
          
          </Col>
        </Row>
        
      </Card.Body>
    )
  }
}

export default ItemCardItems;