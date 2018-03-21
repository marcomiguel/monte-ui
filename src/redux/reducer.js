import { combineReducers } from 'redux'
import users from './modules/users'
import cases from './modules/cases'

export default combineReducers({
  users,
  cases
})