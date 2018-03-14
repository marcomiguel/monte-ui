let nextTodoId = 0
export const addTodo = (text) => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

// ---- Users ---- //

// Actions
export const SHOW_USERS = 'SHOW_USERS'
export const SHOW_USER = 'SHOW_USER'

// Action Creators
export function loadUsers(users){
  return { type: SHOW_USERS, payload: users}
}

export function loadUser(user){
  return { type: SHOW_USER, payload: user}
}

// Api
export function showUsers(){
  return dispatch => {
    fetch('http://jsonplaceholder.typicode.com/users')
      .then( response => response.json())
      .then( response => { dispatch( loadUsers(response)) })
  }
}

export function getUser(userId){
  return dispatch => {
    fetch(`http://jsonplaceholder.typicode.com/users/${userId}`)
      .then( response => response.json())
      .then( response => { dispatch( loadUser(response)) })
  }
}