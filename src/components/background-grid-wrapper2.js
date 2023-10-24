import React from 'react'

import PropTypes from 'prop-types'

import BackgroundPattern from './background-pattern'
import Component1 from './component1'
import Component2 from './component2'
import './background-grid-wrapper2.css'

const BackgroundGridWrapper2 = (props) => {
  return (
    <div className="background-grid-wrapper2-background-grid-wrapper">
      <BackgroundPattern rootClassName="background-pattern-root-class-name8"></BackgroundPattern>
      <Component1 rootClassName="component1-root-class-name2"></Component1>
      <Component2 rootClassName="component2-root-class-name2"></Component2>
      <BackgroundPattern rootClassName="background-pattern-root-class-name9"></BackgroundPattern>
      <BackgroundPattern rootClassName="background-pattern-root-class-name10"></BackgroundPattern>
      <BackgroundPattern rootClassName="background-pattern-root-class-name11"></BackgroundPattern>
    </div>
  )
}

BackgroundGridWrapper2.defaultProps = {
  rootClassName: '',
}

BackgroundGridWrapper2.propTypes = {
  rootClassName: PropTypes.string,
}

export default BackgroundGridWrapper2
