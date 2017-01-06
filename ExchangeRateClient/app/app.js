import 'sanitize.css/sanitize.css'
import 'react-select/dist/react-select.css'
import React from 'react'
import { render } from 'react-dom'
import MainPage from './components/MainPage'
import reducers from './reducers'
import { createStore, applyMiddleware,  } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { Provider } from "react-redux"

import './global.css'

const store = createStore(reducers, applyMiddleware(createSagaMiddleware()))

render(
  <Provider store={store}>
    <MainPage />
  </Provider>,
  document.getElementById('exchange-rate-client')
)
