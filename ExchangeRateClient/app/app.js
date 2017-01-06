import 'sanitize.css/sanitize.css'
import 'react-select/dist/react-select.css'
import React from 'react'
import 'babel-polyfill';
import { render } from 'react-dom'
import MainPage from './components/MainPage'
import reducers from './reducers'
import { createStore, applyMiddleware,  } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { Provider } from "react-redux"
import { runSagas } from './sagas'

import './global.css'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducers, applyMiddleware(sagaMiddleware))
runSagas(sagaMiddleware)

render(
  <Provider store={store}>
    <MainPage />
  </Provider>,
  document.getElementById('exchange-rate-client')
)
