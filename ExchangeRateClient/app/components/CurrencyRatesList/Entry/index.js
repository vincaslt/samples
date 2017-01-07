import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules';
import style from './style.css'

const Entry = ({ name, value, trend }) => {
  const column = (text) => <div styleName="column">{text}</div>
  return (
    <div styleName="row">
      {column(name)}
      {column(value)}
      {column(trend)}
    </div>
  )
}

export const rateListEntryShape = {
  name: PropTypes.string,
  value: PropTypes.number,
  trend: PropTypes.string
}

Entry.propTypes = rateListEntryShape

export default CSSModules(Entry, style)