import React from 'react'
import PropTypes from 'prop-types'

const Field = ({ children, id, onClick }) => (
  // eslint-disable-next-line
  <div className="field" role="button" id={id} onClick={onClick}>
    {children}
  </div>
)

Field.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Field
