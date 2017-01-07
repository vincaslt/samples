import { connect } from 'react-redux'
import CurrencyFilter from '../components/CurrencyFilter'
import { changeCurrencyFilter } from '../actions'
import { currencyPairsAsOptionsSelector, configurationSelector, selectedPairsAsOptionsSelector } from '../selectors'

const mapStateToProps = (state) => ({
  selectedOptions: selectedPairsAsOptionsSelector(state),
  allOptions: currencyPairsAsOptionsSelector(state),
  loading: configurationSelector(state).loading
})

const mapDispatchToProps = {
  onChange: (options) => changeCurrencyFilter(options)
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyFilter)