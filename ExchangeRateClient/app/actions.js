export const REQUEST_START_UPDATES = 'REQUEST_START_UPDATES'
export const RECEIVE_CONFIGURATION = 'RECEIVE_CONFIGURATION'
export const REQUEST_UPDATE_RATES = 'REQUEST_UPDATE_RATES'
export const RECEIVE_RATES = 'RECEIVE_RATES'

export const receiveConfiguration = (configuration) => ({
  type: RECEIVE_CONFIGURATION,
  configuration
})

export const requestUpdateRates = () => ({
  type: REQUEST_UPDATE_RATES
})

export const receiveRates = (rates) => ({
  type: RECEIVE_RATES,
  rates
})