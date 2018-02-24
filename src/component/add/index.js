import React, { Component } from 'react';
import Footer from '../footer/index';
import Header from '../header/index';
import Film from '../film/component/film';
import StarRatingComponent from 'react-star-rating-component';

export default class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      director: '',
      detail: '',
      star: 0,
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
        <form
          id="addFilm"
          className="add-film"
          action="xxx"
          onSubmit={(e) => {
            new Film(this).addFilm(e);
            this.props.history.push('/');
          }}
        >
          <div className="form-group">

            <input
              id="input-name"
              className="form-text"
              type="text"
              placeholder="电影名称"
              value={this.state.name}
              onChange={(e) => this.setState({
                name: e.target.value
              })}
            />
          </div>
          <div className="form-group">
            <input
              id="input-director"
              className="form-text"
              type="text"
              placeholder="导演"
              value={this.state.director}
              onChange={(e) => this.setState({
                director: e.target.value
              })}
            />
          </div>
          <div className="form-group">
            <textarea
              rows="2" 
              placeholder="电影详细介绍"
              value={this.state.detail}
              onChange={(e) => this.setState({
                detail: e.target.value
              })}>
            </textarea>
          </div>
          <StarRatingComponent 
            className="form-group"
            name="star" 
            starCount={5}
            value={this.state.star}
            onStarClick={(nextValue, prevValue, name) => this.setState({
              star: nextValue
            })}
          />
          <input className="form-submit" type="submit" value="立即提交" />
        </form>
        <Footer />
      </div>
    );
  }
}
