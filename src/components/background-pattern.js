import React from 'react'

import PropTypes from 'prop-types'

import './background-pattern.css'

const BackgroundPattern = (props) => {
  return (
    <div
      className={`background-pattern-container ${props.rootClassName} `}
    ></div>
  )
}

BackgroundPattern.defaultProps = {
  rootClassName: '',
}

BackgroundPattern.propTypes = {
  rootClassName: PropTypes.string,
}

export default BackgroundPattern
