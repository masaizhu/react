import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../footer/index';
import Header from '../header/index';
import Film from '../film/component/film';
import userImg from './images/userImg.jpg';

export default class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      films: [],
      count: 0
    };
  }
  componentDidMount() {
    new Film(this).getFilms();
  }

  render() {
    return (
      <div>
        <Header />
        <section className="user">
          <img src={userImg} alt='珠儿' />
          <div className="icon-list">
          	<ul>
          	  <li>
          	  	<i className="fa fa-calendar-check-o" aria-hidden="true"></i>
          	  	<p>连续签到1天</p>
          	  </li>
          	  <li>
          	  	<i className="fa fa-female" aria-hidden="true"></i>
          	  	<p>女</p>
          	  </li>
          	  <li>
          	  	<i className="fa fa-heart" aria-hidden="true"></i>
          	  	<p>收藏{this.state.count}部</p>
          	  </li>
          	</ul>
          </div>
          <div className="menu-list">
          	<ul>
              <li>
                <Link to="/like">我的收藏</Link>
              </li>
          	  <li>
          	  	<Link to="/list">最新电影</Link>
          	  </li>
          	  <li>
          	  	<Link to="/add">添加影讯</Link>
          	  </li>
          	  <li>
          	  	<Link to="/list">最新足迹</Link>
          	  </li>
          	  <li>
          	  	<Link to="/home">返回首页</Link>
          	  </li>
          	</ul>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}
