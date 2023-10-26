import React from 'react'

import PropTypes from 'prop-types'

import './background-gray-grid-wrapperelement1.css'

const BackgroundGrayGridWrapperelement1 = (props) => {
  return (
    <div
      className={`background-gray-grid-wrapperelement1-container ${props.rootClassName} `}
    ></div>
  )
}

BackgroundGrayGridWrapperelement1.defaultProps = {
  rootClassName: '',
}

BackgroundGrayGridWrapperelement1.propTypes = {
  rootClassName: PropTypes.string,
}

export default BackgroundGrayGridWrapperelement1
