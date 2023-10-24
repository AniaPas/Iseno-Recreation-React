import React from 'react'

import PropTypes from 'prop-types'

import BackgroundPattern from './background-pattern'
import Component1 from './component1'
import Component2 from './component2'
import './background-grid-wrapper3.css'

const BackgroundGridWrapper3 = (props) => {
  return (
    <div
      className={`background-grid-wrapper3-background-grid-wrapper ${props.rootClassName} `}
    >
      <BackgroundPattern
        rootClassName="background-pattern-root-class-name12"
        className=""
      ></BackgroundPattern>
      <Component1
        rootClassName="component1-root-class-name3"
        className=""
      ></Component1>
      <Component2
        rootClassName="component2-root-class-name3"
        className=""
      ></Component2>
      <BackgroundPattern
        rootClassName="background-pattern-root-class-name13"
        className=""
      ></BackgroundPattern>
      <BackgroundPattern
        rootClassName="background-pattern-root-class-name14"
        className=""
      ></BackgroundPattern>
      <BackgroundPattern
        rootClassName="background-pattern-root-class-name15"
        className=""
      ></BackgroundPattern>
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
