import React from 'react'
import Select from 'react-select'
import CSSModules from 'react-css-modules';
import style from './style.css'

//TODO bind value from redux store via container
class CurrencyFilter extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  logChange = (value) => {
    this.setState({ value })
  }

  render() {
    var options = [
      { value: 'one', label: 'One' },
      { value: 'two', label: 'Two' }
    ];

    return (
      <div styleName="container">
        <div styleName="label">Currency filters</div>
        <Select styleName="filter"
          name="form-field-name"
          value={this.state.value}
          options={options}
          onChange={this.logChange}
          multi={true}
        />
      </div>
    )
  }
  
}

export default CSSModules(CurrencyFilter, style)