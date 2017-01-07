import { combineReducers } from 'redux'
import { RECEIVE_RATES, RECEIVE_CONFIGURATION, REQUEST_START_UPDATES, REQUEST_UPDATE_RATES, CHANGE_CURRENCY_FILTER } from './actions'

const configurationInitialState = { configuration: {}, loading: false }
const configuration = (state = configurationInitialState, { type, configuration, filteredIds }) => {
  switch(type) {
    case RECEIVE_CONFIGURATION:
      return {
        ...state,
        ...configuration,
        loading: false
      }
    case REQUEST_START_UPDATES:
      return {
        ...state,
        loading: true
      }
    case CHANGE_CURRENCY_FILTER:
      return {
        ...state,
        ...configuration,
        filteredIds
      }
    default:
      return state
  }
}

const ratesInitialState = { rates: {}, loading: false }
const rates = (state = ratesInitialState, { type, rates }) => {
  switch(type) {
    case RECEIVE_RATES:
      return {
        ...state,
        ...rates,
        loading: false
      }
    case REQUEST_UPDATE_RATES:
      return {
        ...state,
        loading: true
      }
    default:
      return state
  }
}
export default combineReducers({ rates, configuration })