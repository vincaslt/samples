import { createSelector } from 'reselect'

export const configurationSelector = state => state.configuration

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