import axios from 'axios'
import config from './config.json'
import { REQUEST_UPDATE_RATES, REQUEST_START_UPDATES, receiveConfiguration, receiveRates, requestUpdateRates } from './actions'
import { take, call, put, takeLatest } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import qs from 'qs'


function* updateRates() {
  const rates = yield call(axios.get, config.ratesEndpoint, {
    params: {
      currencyPairIds: ['70c6744c-cba2-5f4c-8a06-0dac0c4e43a1', 'a2bda952-4369-5d41-9d0b-e6c9947e5b82']
      // TODO: use reselect for selector and handle errors
    },
    paramsSerializer: (params) => qs.stringify(params, { indices: false }) 
  })
  yield put(receiveRates(rates))
  yield delay(config.interval)
  yield put(requestUpdateRates())
}

export function* requestStartUpdates() {
  yield take(REQUEST_START_UPDATES)
  const configuration = yield call(axios, config.configurationEndpoint) // TODO: handle errors
  yield put(receiveConfiguration(configuration))
  yield put(requestUpdateRates())
}

export function* watchStartUpdates() {
  yield takeLatest(REQUEST_UPDATE_RATES, updateRates)
}


// Register sagas for running
const sagas = [
  requestStartUpdates,
  watchStartUpdates
]

export function runSagas(sagaMiddleware) {
  sagas.forEach(sagaMiddleware.run)
}