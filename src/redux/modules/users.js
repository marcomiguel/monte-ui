// ---- Users ---- //

// Actions Type
export const SHOW_USERS = 'SHOW_USERS'
export const SHOW_USER = 'SHOW_USER'

// Reducer
const initialState = {
    list: [],
    selected: {}
}

export default function reducer(state = initialState, action) {
    switch(action.type){
        case SHOW_USERS:
            return Object.assign({}, state, { list: action.payload })
        case SHOW_USER:
            return Object.assign({}, state, { selected: action.payload })
        default:
            return state
    }        
}


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