import axios from 'axios'
import qs from 'qs'
import { ratesEndpoint, configurationEndpoint } from './config.json'

export function fetchRates(currencyPairIds) {
  return axios.get(ratesEndpoint, {
    params: { currencyPairIds },
    paramsSerializer: (params) => qs.stringify(params, { indices: false }) 
  })
}

export function fetchConfiguration() {
  return axios.get(configurationEndpoint)
}