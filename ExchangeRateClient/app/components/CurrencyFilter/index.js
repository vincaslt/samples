import React, { PropTypes } from 'react'
import Select from 'react-select'
import CSSModules from 'react-css-modules'
import style from './style.css'

const CurrencyFilter = ({ selectedOptions = [], allOptions = [], onChange, loading = false }) => (
  <div styleName="container">
    <div styleName="label">Currency filters</div>
    <Select styleName="filter"
      name="form-field-name"
      value={selectedOptions}
      options={allOptions}
      onChange={onChange}
      multi={true}
      isLoading={loading}
    />
  </div>
)

const optionShape = {
  value: PropTypes.string,
  label: PropTypes.string
}

CurrencyFilter.propTypes = {
  onChange: PropTypes.func.isRequired,
  allOptions: PropTypes.arrayOf(PropTypes.shape(optionShape)),
  selectedOptions: PropTypes.arrayOf(PropTypes.shape(optionShape)),
  loading: PropTypes.bool
}

export default CSSModules(CurrencyFilter, style)