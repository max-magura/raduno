import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from 'react-bootstrap';
import './DessertDishCard.css';
import ItemCardsItems from '../ItemCardItems/ItemCardItems';


class ItemCards extends Component {
  render() {
    return (
      <Card className="item-card center">
        <Card.Header className="item-card-header">
          <span className="description">{this.props.description}</span>
          <span className="quantity-needed">{this.props.dishesNeeded}<span style={{marginLeft: '5px'}}>Needed</span></span>
        </Card.Header>
        <Card.Body>
          <ItemCardsItems foodName="Cherry Pie" broughtBy="Joel Buentello"/>
          <ItemCardsItems foodName="Lemon Lie Pie" broughtBy="Max Magura"/>
          <ItemCardsItems foodName="Brownies" broughtBy="Scott Nelson"/>
          <ItemCardsItems foodName="Cookies" broughtBy="Austin Graves"/>

        </Card.Body>
      </Card>
      // <div className="item-card center">
      //   <div className="item-card-header">
      //     <span className="description">Mains</span>
      //     <span className="number-needed" style={{paddingLeft: '10px'}}><span style={{paddingRight: '3px'}}>3</span>Needed</span>
      //   </div>
      // </div>
    )
  }
}

export default ItemCards;
