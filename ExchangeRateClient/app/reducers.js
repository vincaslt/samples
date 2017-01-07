import { combineReducers } from 'redux'
import { RECEIVE_RATES, RECEIVE_CONFIGURATION } from './actions'

const configuration = (state = {}, { type, configuration }) => {
  return type === RECEIVE_CONFIGURATION ? configuration : state
}

const rates = (state = {}, { type, rates }) => {
  return type === RECEIVE_RATES ? rates : state
}
export default combineReducers({ rates, configuration })