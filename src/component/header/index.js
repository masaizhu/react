import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import logo from './images/logo.png';

export default class Header extends Component {

  render() {
    return (
      <Switch>
        <Route
          exact
          path="/list"
          render={() =>
            <header className='header'>
          	  <h1>电影列表</h1>
          	</header>
          }
        />
        <Route
          exact
          path="/add"
          render={() =>
            <header className='header'>
          	  <h1>增加影讯</h1>
          	</header>
          }
        />
        <Route
          exact
          path="/user"
          render={() =>
            <header className='header'>
              <h1>个人中心</h1>
            </header>
          }
        />
        <Route
          exact
          path="/like"
          render={() =>
            <header className='header'>
              <h1>我的收藏</h1>
            </header>
          }
        />
        <Route
          render={() =>
            <header className='header header-logo'>
              <Link to='/'><img src={logo} alt='嘉兴电影俱乐部' /></Link>
          	</header>
          }
        />
      </Switch>
    );
  }
}
