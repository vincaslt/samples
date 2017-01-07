import React, { PropTypes } from 'react'
import Entry, { rateListEntryShape } from './Entry'
import CSSModules from 'react-css-modules'
import style from './style.css'

const CurrencyRatesList = ({ rates }) => {
  const entries = rates.map(({ id, name, value, trend }) => (
    <Entry name={name} value={value} trend={trend} key={id} />
  ))
  const headerCol = (name) => <div styleName="header-col">{name}</div>

  const list = (
    <div styleName="container">
      <div styleName="header">
        {headerCol('Currencies')}
        {headerCol('Exchange rate')}
        {headerCol('Trend')}
      </div>
      {entries}
    </div>
  )

  return rates.length > 0 ? list : (
    <div>Please select at least one filter</div>
  )
}

CurrencyRatesList.propTypes = {
  rates: PropTypes.arrayOf(PropTypes.shape({
    ...rateListEntryShape,
    id: PropTypes.string.isRequired
  })).isRequired,
}

export default CSSModules(CurrencyRatesList, style)