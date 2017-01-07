import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import style from './style.css'

const Entry = ({ name, value, trend }) => {
  const column = (text, status) => <div styleName={`column ${status || ''}`}>{text}</div>
  const getStatus = (trend) => {
    switch(trend) {
      case 'stagnating': return 'status-ok'
      case 'growing': return 'status-good'
      case 'declining': return 'status-bad'
      default: return null
    }
  }
  return (
    <div styleName="row">
      {column(name)}
      {column(value)}
      {column(trend, getStatus(trend))}
    </div>
  )
}

export const rateListEntryShape = {
  name: PropTypes.string,
  value: PropTypes.number,
  trend: PropTypes.string
}

Entry.propTypes = rateListEntryShape

export default CSSModules(Entry, style, { allowMultiple: true})