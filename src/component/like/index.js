import React, { Component } from 'react';
import Footer from '../footer/index';
import Header from '../header/index';
import Film from '../film/component/film';
import Loadable from 'react-loadable';
import Loading from '../loading/index';

const LoadableFilmList = Loadable({
  loader: () => import('../film/index'),
  loading: Loading,
});
export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      films: []
    };
  }
  componentDidMount() {
    new Film(this).getFilms();
  }
  render() {
    return (
      <div>
        <Header />
        <LoadableFilmList films={this.state.films} app={this} />
        <Footer />
      </div>
    );
  }
}
