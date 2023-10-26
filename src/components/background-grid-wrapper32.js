import React from 'react'

import PropTypes from 'prop-types'

import BackgroundGrayGridWrapperelement from './background-gray-grid-wrapperelement'
import './background-grid-wrapper32.css'

const BackgroundGridWrapper32 = (props) => {
  return (
    <div
      className={`background-grid-wrapper32-background-grid-wrapper ${props.rootClassName} `}
    >
      <BackgroundGrayGridWrapperelement
        rootClassName="background-gray-grid-wrapperelement-root-class-name6"
        className=""
      ></BackgroundGrayGridWrapperelement>
      <BackgroundGrayGridWrapperelement
        rootClassName="background-gray-grid-wrapperelement-root-class-name7"
        className=""
      ></BackgroundGrayGridWrapperelement>
      <BackgroundGrayGridWrapperelement
        rootClassName="background-gray-grid-wrapperelement-root-class-name8"
        className=""
      ></BackgroundGrayGridWrapperelement>
      <BackgroundGrayGridWrapperelement
        rootClassName="background-gray-grid-wrapperelement-root-class-name9"
        className=""
      ></BackgroundGrayGridWrapperelement>
      <BackgroundGrayGridWrapperelement
        rootClassName="background-gray-grid-wrapperelement-root-class-name10"
        className=""
      ></BackgroundGrayGridWrapperelement>
      <BackgroundGrayGridWrapperelement
        rootClassName="background-gray-grid-wrapperelement-root-class-name11"
        className=""
      ></BackgroundGrayGridWrapperelement>
    </div>
  )
}

BackgroundGridWrapper32.defaultProps = {
  rootClassName: '',
}

BackgroundGridWrapper32.propTypes = {
  rootClassName: PropTypes.string,
}

export default BackgroundGridWrapper32
