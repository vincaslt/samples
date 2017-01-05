import React, { PropTypes } from 'react'

const Entry = ({ name, value, trend }) => (
  <div>
    {name} - {value} - {trend}
  </div>
)

Entry.propTypes = {
  name: PropTypes.string,
  value: PropTypes.number,
  trend: PropTypes.string
}

export default Entry