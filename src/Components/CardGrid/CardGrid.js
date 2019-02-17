import React, { Component } from 'react';
import './CardGrid.css';
import Card from '../Card/Card'
import getApiData from '../../fetchData';
// import addCards from '../../actions/actions';

class CardGrid extends Component {

  componentDidMount() {
    getApiData().then((jsonObj) => {
      console.log(jsonObj.data);
      this.props.addCards(jsonObj.data);
    });
  }

  render() {
    console.log(this.props.cards);
    // console.log(cards);
    return (
      <div className="card_grid">
        {
            //  (this.props.cards !== undefined) ? 
            this.props.cards.map((card, index) => {
            // console.log(card);
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
