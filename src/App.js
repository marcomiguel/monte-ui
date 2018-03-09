import React from 'react';
import AddTodo from './containers/AddTodo'
import Footer from './components/Footer'
import VisibleTodoList from './containers/VisibleTodoList'
import Users from './containers/Users'

const App = () => (
  <div>
    <AddTodo/>
    <VisibleTodoList/>
    <Footer/>

    <Users/>
  </div>
)

export default App;
