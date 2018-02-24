import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
  Link
} from 'react-router-dom';
import Home from './component/home/index';
import List from './component/list/index';
import Add from './component/add/index';
import User from './component/user/index';
import Detail from './component/detail/index';
import Like from './component/like/index';
require('./scss/layout.scss');

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">

          <Switch>
            <Redirect exact from='/' to='/home'/>
            <Route path="/home" component={Home}/>
          </Switch>
          <Route path="/list" component={List}/>
          <Route path="/add" component={Add}/>
          <Route path="/user" component={User}/>
          <Route path="/detail/:filmid" component={Detail}/>
          <Route path="/like" component={Like}/>
        </div>
      </Router>
    );
  }
}

export default App;
