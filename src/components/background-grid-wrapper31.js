import React from 'react'

import PropTypes from 'prop-types'

import BackgroundGridWrapper32 from './background-grid-wrapper32'
import './background-grid-wrapper31.css'

const BackgroundGridWrapper31 = (props) => {
  return (
    <div className="background-grid-wrapper31-background-grid-wrapper">
      <div className="background-grid-wrapper31-container"></div>
      <BackgroundGridWrapper32 rootClassName="background-grid-wrapper32-root-class-name"></BackgroundGridWrapper32>
    </div>
  )
}

BackgroundGridWrapper31.defaultProps = {
  rootClassName: '',
}

BackgroundGridWrapper31.propTypes = {
  rootClassName: PropTypes.string,
}

export default BackgroundGridWrapper31
