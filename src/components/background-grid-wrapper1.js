import React from 'react'

import PropTypes from 'prop-types'

import BackgroundPattern from './background-pattern'
import Component1 from './component1'
import Component2 from './component2'
import './background-grid-wrapper1.css'

const BackgroundGridWrapper1 = (props) => {
  return (
    <div className="background-grid-wrapper1-background-grid-wrapper">
      <BackgroundPattern rootClassName="background-pattern-root-class-name"></BackgroundPattern>
      <Component1 rootClassName="component1-root-class-name1"></Component1>
      <Component2 rootClassName="component2-root-class-name1"></Component2>
      <BackgroundPattern rootClassName="background-pattern-root-class-name5"></BackgroundPattern>
      <BackgroundPattern rootClassName="background-pattern-root-class-name6"></BackgroundPattern>
      <BackgroundPattern rootClassName="background-pattern-root-class-name7"></BackgroundPattern>
    </div>
  )
}

BackgroundGridWrapper1.defaultProps = {
  rootClassName: '',
}

BackgroundGridWrapper1.propTypes = {
  rootClassName: PropTypes.string,
}

export default BackgroundGridWrapper1
