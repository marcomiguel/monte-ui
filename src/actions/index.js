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

// Action Creators
export function loadUsers(users){
  return { type: SHOW_USERS, payload: users}
}

// Api
export function showUsers(){
  return dispatch => {
    fetch('http://jsonplaceholder.typicode.com/users')
      .then( response => response.json())
      .then( response => { console.log(response, 'rrr');dispatch( loadUsers(response)) })
  }
}