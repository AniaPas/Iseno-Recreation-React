import React from 'react'

import PropTypes from 'prop-types'

import './background-pattern1.css'

const BackgroundPattern1 = (props) => {
  return (
    <div
      className={`background-pattern1-container ${props.rootClassName} `}
    ></div>
  )
}

BackgroundPattern1.defaultProps = {
  rootClassName: '',
}

BackgroundPattern1.propTypes = {
  rootClassName: PropTypes.string,
}

export default BackgroundPattern1
