import React, { Component } from 'react';
import AddTodo from './containers/AddTodo'
import Footer from './components/Footer'
import VisibleTodoList from './containers/VisibleTodoList'
import UsersContainer from './containers/UsersContainer'
import UserContainer from './containers/UserContainer'

import { Switch, Route, Link } from 'react-router-dom'

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to="/">Welcome</Link></li>
        <li><Link to="/todo">Todo</Link></li>
        <li><Link to="/users">Users</Link></li>
      </ul>
    </nav>
  </header>
)

const Users = () => (
  <Switch>
    <Route exact path='/users' component={UsersContainer}/>
    <Route path='/user/:id' component={UserContainer}/>
  </Switch>
)

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Welcome}/>
      <Route path="/users" component={Users}/>
      <Route exact path="/todo" component={Todo}/>
    </Switch>
  </main>
)

const Welcome = () => <div>Welcome!</div>

const Todo = () => (
  <div>
    <AddTodo/>
    <VisibleTodoList/>
    <Footer/>
  </div>
)


class App extends Component{
  render(){
    return (
      <div>
        <Header/>
        <Main/>
      </div>
    )
  }
}

export default App;
