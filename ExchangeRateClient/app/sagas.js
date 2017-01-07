import { REQUEST_UPDATE_RATES, REQUEST_START_UPDATES, receiveConfiguration, receiveRates, requestUpdateRates } from './actions'
import { take, call, put, takeLatest, select, fork, join } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import { fetchRates, fetchConfiguration } from './api'
import { interval } from './config.json'
import { currencyPairsIdsSelector, configurationSelector } from './selectors'
import { configurationInitialState } from './reducers'


function* updateRates() {
  const currencyPairIds = yield select(currencyPairsIdsSelector)
  try {
    const { data } = yield call(fetchRates, currencyPairIds)
    yield put(receiveRates(data.rates))
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
  const configRequest = yield fork(fetchConfiguration)
  let configuration = yield select(configurationSelector)
  if (!configuration.isLoaded) {
    yield join(configRequest)
    configuration = configRequest.result().data
  }
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