import axios from 'axios'
import config from './config.json'
import { REQUEST_UPDATE_RATES, REQUEST_START_UPDATES, receiveConfiguration, receiveRates, requestUpdateRates } from './actions'
import { take, call, put, delay } from 'redux-saga/effects'

function* startUpdates() {
  yield take(REQUEST_UPDATE_RATES)
  const rates = yield call(axios.get, config.ratesEndpoint, {
    params: {
      currencyPairIds: ['70c6744c-cba2-5f4c-8a06-0dac0c4e43a1', 'a2bda952-4369-5d41-9d0b-e6c9947e5b82']
    } // TODO: use reselect for selector
  })
  yield put(receiveRates(rates))
  yield delay(config.interval)
  yield put(requestUpdateRates())
}

export function* requestStartUpdates() {
  yield take(REQUEST_START_UPDATES)
  const configuration = yield call(axios, config.configurationEndpoint)
  yield put(receiveConfiguration(configuration))
  yield put(requestUpdateRates())
}

// Register sagas for running
const sagas = [
  requestStartUpdates,
  startUpdates
]

export function runSagas(sagaMiddleware) {
  sagas.forEach(sagaMiddleware.run)
}