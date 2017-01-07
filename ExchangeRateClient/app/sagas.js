import { REQUEST_UPDATE_RATES, REQUEST_START_UPDATES, receiveConfiguration, receiveRates, requestUpdateRates } from './actions'
import { take, call, put, takeLatest } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import { fetchRates, fetchConfiguration } from './api'
import { interval } from './config.json'


function* updateRates() {
  try {
    const { data } = yield call(fetchRates)
    yield put(receiveRates(data))
    yield delay(interval)
  } catch ({ response }) {
    if (response.status === 500) {
      console.log('Failed to update rates, retrying...')
    }
  }
  
  yield put(requestUpdateRates())
}

export function* requestStartUpdates() {
  yield take(REQUEST_START_UPDATES)
  const { data } = yield call(fetchConfiguration)
  yield put(receiveConfiguration(data))
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