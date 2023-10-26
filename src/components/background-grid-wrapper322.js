import React from 'react'

import PropTypes from 'prop-types'

import BackgroundGrayGridWrapperelement from './background-gray-grid-wrapperelement'
import './background-grid-wrapper322.css'

const BackgroundGridWrapper322 = (props) => {
  return (
    <div
      className={`background-grid-wrapper322-background-grid-wrapper ${props.rootClassName} `}
    >
      <BackgroundGrayGridWrapperelement rootClassName="background-gray-grid-wrapperelement-root-class-name14"></BackgroundGrayGridWrapperelement>
      <BackgroundGrayGridWrapperelement rootClassName="background-gray-grid-wrapperelement-root-class-name15"></BackgroundGrayGridWrapperelement>
      <BackgroundGrayGridWrapperelement rootClassName="background-gray-grid-wrapperelement-root-class-name16"></BackgroundGrayGridWrapperelement>
    </div>
  )
}

BackgroundGridWrapper322.defaultProps = {
  rootClassName: '',
}

BackgroundGridWrapper322.propTypes = {
  rootClassName: PropTypes.string,
}

export default BackgroundGridWrapper322
