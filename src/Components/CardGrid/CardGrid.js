import React, { Component } from 'react';
import './CardGrid.css';
import Card from '../Card/Card'

class CardGrid extends Component {
  render() {
    return (
      <div className="card_grid">
        {
          this.props.cards.map((card, index) => {
            return <Card
              date = {card.date}
              readingTime = {card.readingTime}
              title = {card.title}
              description = {card.description}
              claps = {card.claps}
              liked = {card.liked}
              imageSrc = {`./Images/${card.image}`}
            ></Card>
          })
        }
      </div>
    );
  }
}

export default CardGrid;
