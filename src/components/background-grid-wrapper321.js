import React from 'react'

import PropTypes from 'prop-types'

import BackgroundGrayGridWrapperelement from './background-gray-grid-wrapperelement'
import './background-grid-wrapper321.css'

const BackgroundGridWrapper321 = (props) => {
  return (
    <div
      className={`background-grid-wrapper321-background-grid-wrapper ${props.rootClassName} `}
    >
      <BackgroundGrayGridWrapperelement rootClassName="background-gray-grid-wrapperelement-root-class-name12"></BackgroundGrayGridWrapperelement>
      <BackgroundGrayGridWrapperelement rootClassName="background-gray-grid-wrapperelement-root-class-name13"></BackgroundGrayGridWrapperelement>
    </div>
  )
}

BackgroundGridWrapper321.defaultProps = {
  rootClassName: '',
}

BackgroundGridWrapper321.propTypes = {
  rootClassName: PropTypes.string,
}

export default BackgroundGridWrapper321
