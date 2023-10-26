import React from 'react'

import PropTypes from 'prop-types'

import './background-gray-grid-wrapperelement-line.css'

const BackgroundGrayGridWrapperelementLine = (props) => {
  return (
    <div
      className={`background-gray-grid-wrapperelement-line-background-gray-grid-wrapperelement-line ${props.rootClassName} `}
    ></div>
  )
}

BackgroundGrayGridWrapperelementLine.defaultProps = {
  rootClassName: '',
}

BackgroundGrayGridWrapperelementLine.propTypes = {
  rootClassName: PropTypes.string,
}

export default BackgroundGrayGridWrapperelementLine
