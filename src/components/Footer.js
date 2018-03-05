import React from 'react'
import PropTypes from 'prop-types'

const footerStyle = {
  backgroundColor: 'lightblue',
  fontSize: '20px',
  color: 'white',
  borderTop: '1px solid #E7E7E7',
  textAlign: 'center',
  padding: '20px',
  position: 'fixed',
  left: '0',
  bottom: '0',
  height: '60px',
  width: '100%',
}

const phantomStyle = {
  display: 'block',
  padding: '20px',
  height: '60px',
  width: '100%',
}

export default function Footer({ children }) {
  return (
    <div>
      <div style={phantomStyle} />
      <div style={footerStyle}>{children}</div>
    </div>
  )
}

Footer.propTypes = {
  children: PropTypes.node.isRequired,
}
