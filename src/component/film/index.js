import React, { Component } from 'react';
import FilmItem from './component/filmItem.js';
import Loadable from 'react-loadable';
import Loading from '../loading/index';

const LoadableFilm = Loadable({
  loader: () => import('./component/filmItem'),
  loading: Loading,
});
export default class FilmList extends Component{

  render(){
    return (
      <div className="film-list">
        <ul>
          {this.props.films.map((film, index) =>(
            <LoadableFilm
              id={film.id}
              image={film.image}
              name={film.name}
              director={film.director}
              star={film.star}
              key={film.id} />
          ))}
        </ul>
      </div>
    );
  }
}