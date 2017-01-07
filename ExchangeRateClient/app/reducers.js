import { combineReducers } from 'redux'
import { RECEIVE_RATES, RECEIVE_CONFIGURATION, REQUEST_START_UPDATES, REQUEST_UPDATE_RATES, CHANGE_CURRENCY_FILTER } from './actions'

const configurationInitialState = { loading: false }
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


const getTrend = (oldValue, newValue) => {
  if (!oldValue || oldValue === newValue) {
    return 'stagnating'
  } else if (oldValue < newValue) {
    return 'growing'
  } else if (oldValue > newValue) {
    return 'declining'
  }
}

const ratesMapper = (oldRates, rates) => {
  const newRates = { ...rates }
  Object.entries(newRates)
    .forEach(([id, value]) => newRates[id] = {
      trend: getTrend((oldRates[id] || {}).value, value),
      value
    })
  return newRates
}

const ratesInitialState = { rates: {}, loading: false }
const rates = (state = ratesInitialState, { type, rates }) => {
  switch(type) {
    case RECEIVE_RATES:
      return {
        ...state,
        rates: ratesMapper(state.rates, rates),
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