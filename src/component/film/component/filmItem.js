import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Film from './film';
import StarRatingComponent from 'react-star-rating-component';

export default class FilmItem extends Component {

  render() {
    return (
      <li>
      	<Link to={'/detail/' + this.props.id}>
          <img src={this.props.image} alt={this.props.name} />
          <h3>{this.props.name}</h3>
          <StarRatingComponent 
            name="star" 
            editing={false}
            renderStarIcon={() => <span>★</span>}
            starCount={5}
            value={this.props.star}
          />
          <p>{this.props.director}</p>
         </Link>
      </li>
    );
  }
}