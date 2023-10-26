import React from 'react'

import PropTypes from 'prop-types'

import './background-gray-grid-wrapperelement.css'

const BackgroundGrayGridWrapperelement = (props) => {
  return (
    <div
      className={`background-gray-grid-wrapperelement-container ${props.rootClassName} `}
    ></div>
  )
}

BackgroundGrayGridWrapperelement.defaultProps = {
  rootClassName: '',
}

BackgroundGrayGridWrapperelement.propTypes = {
  rootClassName: PropTypes.string,
}

export default BackgroundGrayGridWrapperelement
