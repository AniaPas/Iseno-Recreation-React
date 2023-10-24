import React from 'react'

import PropTypes from 'prop-types'

import BackgroundPattern from './background-pattern'
import Component1 from './component1'
import Component2 from './component2'
import './background-grid-wrapper.css'

const BackgroundGridWrapper = (props) => {
  return (
    <div
      className={`background-grid-wrapper-background-grid-wrapper ${props.rootClassName} `}
    >
      <BackgroundPattern
        rootClassName="background-pattern-root-class-name1"
        className=""
      ></BackgroundPattern>
      <Component1
        rootClassName="component1-root-class-name"
        className=""
      ></Component1>
      <Component2
        rootClassName="component2-root-class-name"
        className=""
      ></Component2>
      <BackgroundPattern
        rootClassName="background-pattern-root-class-name3"
        className=""
      ></BackgroundPattern>
      <BackgroundPattern
        rootClassName="background-pattern-root-class-name2"
        className=""
      ></BackgroundPattern>
      <BackgroundPattern
        rootClassName="background-pattern-root-class-name4"
        className=""
      ></BackgroundPattern>
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
