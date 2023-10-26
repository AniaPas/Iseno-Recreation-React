import React from 'react'

import PropTypes from 'prop-types'

import BackgroundGridWrapperelement2 from './background-grid-wrapperelement2'
import BackgroundGridWrapperelement1 from './background-grid-wrapperelement1'
import BackgroundGridWrapperelement from './background-grid-wrapperelement'
import './background-grid-wrapper.css'

const BackgroundGridWrapper = (props) => {
  return (
    <div
      className={`background-grid-wrapper-background-grid-wrapper ${props.rootClassName} `}
    >
      <BackgroundGridWrapperelement2
        rootClassName="background-grid-wrapperelement2-root-class-name1"
        className=""
      ></BackgroundGridWrapperelement2>
      <BackgroundGridWrapperelement1
        rootClassName="background-grid-wrapperelement1-root-class-name"
        className=""
      ></BackgroundGridWrapperelement1>
      <BackgroundGridWrapperelement
        rootClassName="background-grid-wrapperelement-root-class-name"
        className=""
      ></BackgroundGridWrapperelement>
      <BackgroundGridWrapperelement2
        rootClassName="background-grid-wrapperelement2-root-class-name3"
        className=""
      ></BackgroundGridWrapperelement2>
      <BackgroundGridWrapperelement2
        rootClassName="background-grid-wrapperelement2-root-class-name2"
        className=""
      ></BackgroundGridWrapperelement2>
      <BackgroundGridWrapperelement2
        rootClassName="background-grid-wrapperelement2-root-class-name4"
        className=""
      ></BackgroundGridWrapperelement2>
    </div>
  )
}

BackgroundGridWrapper.defaultProps = {
  rootClassName: '',
}

BackgroundGridWrapper.propTypes = {
  rootClassName: PropTypes.string,
}

export default BackgroundGridWrapper
