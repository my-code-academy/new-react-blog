import React, { Component } from 'react';
import './Card.css';
import BlackHeartImage from '../../Icons/heart-black.svg'
import RedHeartImage from '../../Icons/heart-red.svg';
import ClappingImage from '../../Icons/clapping.svg';


class Card extends Component {
    state = {
        open: this.props.liked,
        clapsCount: this.props.claps
    }

    toggleImage = () => {
        this.setState(state => ({ open: !state.open }))
    }
    

    addClap = () => {
        this.setState(state => ({ clapsCount: state.clapsCount+1 }))
    }
    getImageName = () => this.state.open ? BlackHeartImage : RedHeartImage;
    render() {
        return (
            <div class="card">
                <img src={this.props.imageSrc} alt="abstract" className='image' />
                <div className="container">
                    <div className="dateTime">
                        <span className="date">{this.props.date}</span>
                        <span className='date' id="readTime">{this.props.readingTime}</span>
                    </div>
                    <p className='title'>{this.props.title}</p>
                    <p className='abstract'>{this.props.description}</p>
                    <hr />
                    <div className="responses">
                        <img onClick={this.addClap} alt="clap" src={ClappingImage} className='clap' />
                        <span>{this.state.clapsCount}</span>
                        <img alt="" className="heart" src={this.getImageName()} onClick={this.toggleImage}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;
