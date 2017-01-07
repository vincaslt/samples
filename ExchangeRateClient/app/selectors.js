import { createSelector } from 'reselect'

export const configurationSelector = state => state.configuration
export const ratesSelector = state => state.rates.rates

export const currencyPairsSelector = createSelector(
  configurationSelector, (config) =>  config.currencyPairs || {}
)

export const filteredIdsSelector = createSelector(
  configurationSelector, (config) =>  config.filteredIds || []
)


export const currencyPairsIdsSelector = createSelector(
  currencyPairsSelector,
  (currencyPairs) => Object.keys(currencyPairs)
)

export const currencyPairsAsOptionsSelector = createSelector(
  currencyPairsSelector,
  (currencyPairs) => (
    Object.entries(currencyPairs).map(([id, currency]) => ({
      value: id,
      label: `${currency[0].name}/${currency[1].name}`
    }))
  )
)

export const selectedPairsAsOptionsSelector = createSelector(
  filteredIdsSelector,
  currencyPairsAsOptionsSelector,
  (filteredIds, currencyPairOptions) => (
    currencyPairOptions.filter(opt => filteredIds.includes(opt.value))
  )
)

export const selectedPairsAsListEntriesSelector = createSelector(
  filteredIdsSelector,
  currencyPairsSelector,
  ratesSelector,
  (filteredIds, currencyPairs, rates) => (
    Object.entries(currencyPairs)
      .filter(([id, currency]) => filteredIds.includes(id))
      .map(([id, currency]) => ({
        id,
        value: (rates[id] || {}).value,
        name: `${currency[0].code}/${currency[1].code}`,
        trend: (rates[id] || {}).trend
      }))
  )
)