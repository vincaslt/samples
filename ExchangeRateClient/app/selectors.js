import { createSelector } from 'reselect'

export const currencyPairsSelector = state => state.configuration.currencyPairs

export const currencyPairsIdsSelector = createSelector(
  currencyPairsSelector,
  (currencyPairs) => Object.keys(currencyPairs)
)