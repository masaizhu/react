import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
  }

  render() {
    return (
      <footer className='footer'>
        <ul>
          <li><NavLink to='/home'><i className='fa fa-home'></i>影评首页</NavLink></li>
          <li><NavLink to='/list'><i className='fa fa-list-alt'></i>电影列表</NavLink></li>
          <li><NavLink to='/add'><i className='fa fa-film'></i>增加影讯</NavLink></li>
          <li><NavLink to='/user'><i className='fa fa-user'></i>个人中心</NavLink></li>
        </ul>
      </footer>
    );
  }
}
