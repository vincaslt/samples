import { connect } from 'react-redux'
import CurrencyRatesList from '../components/CurrencyRatesList'
import { selectedPairsAsListEntriesSelector } from '../selectors'

const mapStateToProps = (state) => ({
  rates: selectedPairsAsListEntriesSelector(state)
})

export default connect(mapStateToProps)(CurrencyRatesList)