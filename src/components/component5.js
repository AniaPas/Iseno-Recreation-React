import React from 'react'

import PropTypes from 'prop-types'

import './component5.css'

const Component5 = (props) => {
  return (
    <div className="component5-container">
      <span className="component5-text">{props.text}</span>
      <span className="component5-text1">{props.text1}</span>
    </div>
  )
}

Component5.defaultProps = {
  text1: 'Great Britain',
  text: 'Great Britain',
}

Component5.propTypes = {
  text1: PropTypes.string,
  text: PropTypes.string,
}

export default Component5
