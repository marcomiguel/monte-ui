import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import 'normalize.css';

import UsersContainer from './containers/UsersContainer'
import UserContainer from './containers/UserContainer'
import Dashboard from './pages/Dashboard'
import Todo from './pages/Todo'
import './css/style.css'

const UsersRouting = () => (
  <Switch>
    <Route exact path='/users' component={UsersContainer}/>
    <Route path='/user/:id' component={UserContainer}/>
  </Switch>
)

const AppRouting = () => (
  <Switch>
    <Route path="/users" component={UsersRouting}/>
    <Route exact path="/todo" component={Todo}/>
    <Route exact path="/dashboard" component={Dashboard}/>
  </Switch>
)

class App extends Component{
  render(){
    return (<AppRouting/>)
  }
}

export default App;
