import React, { Component } from 'react';
import AddTodo from './containers/AddTodo'
import Footer from './components/Footer'
import VisibleTodoList from './containers/VisibleTodoList'
import Users from './containers/Users'

import { Switch, Route } from 'react-router-dom'

const Welcome = () => <div>Welcome!</div>

const Todo = () => {
  return (<div>
    <AddTodo/>
    <VisibleTodoList/>
    <Footer/>
  </div>)
}

class App extends Component{
  render(){
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Welcome}/>
          <Route exact path="/users" component={Users}/>
          <Route exact path="/todo" component={Todo}/>
        </Switch>
      </div>
    )
  }
}

export default App;
