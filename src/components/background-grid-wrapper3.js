import React from 'react'

import PropTypes from 'prop-types'

import BackgroundGrayGridWrapperelement from './background-gray-grid-wrapperelement'
import BackgroundGrayGridWrapperelementBox from './background-gray-grid-wrapperelement-box'
import BackgroundGrayGridWrapperelementLine from './background-gray-grid-wrapperelement-line'
import './background-grid-wrapper3.css'

const BackgroundGridWrapper3 = (props) => {
  return (
    <div
      className={`background-grid-wrapper3-background-grid-wrapper ${props.rootClassName} `}
    >
      <BackgroundGrayGridWrapperelement
        rootClassName="background-gray-grid-wrapperelement-root-class-name"
        className=""
      ></BackgroundGrayGridWrapperelement>
      <BackgroundGrayGridWrapperelementBox
        rootClassName="background-gray-grid-wrapperelement-box-root-class-name"
        className=""
      ></BackgroundGrayGridWrapperelementBox>
      <BackgroundGrayGridWrapperelementLine
        rootClassName="background-gray-grid-wrapperelement-line-root-class-name"
        className=""
      ></BackgroundGrayGridWrapperelementLine>
      <BackgroundGrayGridWrapperelement
        rootClassName="background-gray-grid-wrapperelement-root-class-name1"
        className=""
      ></BackgroundGrayGridWrapperelement>
      <BackgroundGrayGridWrapperelement
        rootClassName="background-gray-grid-wrapperelement-root-class-name2"
        className=""
      ></BackgroundGrayGridWrapperelement>
      <BackgroundGrayGridWrapperelement
        rootClassName="background-gray-grid-wrapperelement-root-class-name3"
        className=""
      ></BackgroundGrayGridWrapperelement>
      <BackgroundGrayGridWrapperelement
        rootClassName="background-gray-grid-wrapperelement-root-class-name4"
        className=""
      ></BackgroundGrayGridWrapperelement>
      <BackgroundGrayGridWrapperelement
        rootClassName="background-gray-grid-wrapperelement-root-class-name5"
        className=""
      ></BackgroundGrayGridWrapperelement>
    </div>
  )
}

BackgroundGridWrapper3.defaultProps = {
  rootClassName: '',
}

BackgroundGridWrapper3.propTypes = {
  rootClassName: PropTypes.string,
}

export default BackgroundGridWrapper3
