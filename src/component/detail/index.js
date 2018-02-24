import React, { Component } from 'react';
import Footer from '../footer/index';
import Header from '../header/index';
import Film from '../film/component/film';
import StarRatingComponent from 'react-star-rating-component';

export default class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      films: []
    };
  }
  componentDidMount() {
    new Film(this).getFilms(this.props.match.params.filmid);
  }
  render() {
    return (
      <div>
        <Header />
        {this.state.films.map((film, index) =>(
          <article key={film.id}>
            <div className="detail-img">
              <img src={'.' + film.image} alt={film.name} />
            </div>
            <div className="detail-text">
              <div className="detail-top">
                <h2>{film.name}</h2>
                <i
                  className="fa fa-trash"
                  aria-hidden="true"
                  onClick={() => {
                    new Film(this).removeFilm()
                    this.props.history.push('/');
                  }}>
                </i>
                <i
                  className={film.liked ? "fa fa-heart":"fa fa-heart-o"}
                  aria-hidden="true"
                  onClick={() => new Film(this).handleLike()}>
                </i>
              </div>
              <h3>导演： {film.director}</h3>
              <StarRatingComponent 
                name="star" 
                editing={false}
                renderStarIcon={() => <span>★</span>}
                starCount={5}
                value={film.star}
              />
              <p>{film.detail}</p>
            </div>
          </article>
        ))}
        <Footer />
      </div>
    );
  }
}
