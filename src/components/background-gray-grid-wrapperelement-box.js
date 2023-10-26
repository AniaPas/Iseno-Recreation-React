import React from 'react'

import PropTypes from 'prop-types'

import './background-gray-grid-wrapperelement-box.css'

const BackgroundGrayGridWrapperelementBox = (props) => {
  return (
    <div
      className={`background-gray-grid-wrapperelement-box-background-gray-grid-wrapperelement-box ${props.rootClassName} `}
    ></div>
  )
}

BackgroundGrayGridWrapperelementBox.defaultProps = {
  rootClassName: '',
}

BackgroundGrayGridWrapperelementBox.propTypes = {
  rootClassName: PropTypes.string,
}

export default BackgroundGrayGridWrapperelementBox
