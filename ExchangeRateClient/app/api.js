import axios from 'axios'
import qs from 'qs'
import { ratesEndpoint, configurationEndpoint } from './config.json'

export function fetchRates() {
  return axios.get(ratesEndpoint, {
    params: {
      currencyPairIds: ['70c6744c-cba2-5f4c-8a06-0dac0c4e43a1', 'a2bda952-4369-5d41-9d0b-e6c9947e5b82']
      // TODO: use reselect for selector
    },
    paramsSerializer: (params) => qs.stringify(params, { indices: false }) 
  })
}

export function fetchConfiguration() {
  return axios.get(configurationEndpoint)
}