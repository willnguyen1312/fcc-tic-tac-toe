import React from 'react'
import PropTypes from 'prop-types'

const Info = ({ children }) => <div className="info">{children}</div>

Info.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Info
