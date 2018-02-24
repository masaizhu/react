import React, { Component } from 'react';
import Footer from '../footer/index';
import Header from '../header/index';
import SlideShow from '../slideShow/index';
import Film from '../film/component/film';
import Loadable from 'react-loadable';
import Loading from '../loading/index';

const LoadableFilmList = Loadable({
  loader: () => import('../film/index'),
  loading: Loading,
});

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      films: []
    };
  }
  componentDidMount() {
    new Film(this).getFilms();
    console.log('componentDidMount', this.state.films);
  }
  componentDidUpdate() {
    console.log('componentDidUpdate', this.state.films);
  }
  render() {
    return (
      <div>
        <Header />
        <SlideShow />
        <LoadableFilmList films={this.state.films} app={this} />
        <Footer />
      </div>
    );
  }
}
