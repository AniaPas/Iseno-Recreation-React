import React from 'react'

import PropTypes from 'prop-types'

import BackgroundGridWrapperelement2 from './background-grid-wrapperelement2'
import BackgroundGridWrapperelement1 from './background-grid-wrapperelement1'
import BackgroundGridWrapperelement from './background-grid-wrapperelement'
import './background-grid-wrapper2.css'

const BackgroundGridWrapper2 = (props) => {
  return (
    <div className="background-grid-wrapper2-background-grid-wrapper">
      <BackgroundGridWrapperelement2 rootClassName="background-grid-wrapperelement2-root-class-name8"></BackgroundGridWrapperelement2>
      <BackgroundGridWrapperelement1 rootClassName="background-grid-wrapperelement1-root-class-name2"></BackgroundGridWrapperelement1>
      <BackgroundGridWrapperelement rootClassName="background-grid-wrapperelement-root-class-name2"></BackgroundGridWrapperelement>
      <BackgroundGridWrapperelement2 rootClassName="background-grid-wrapperelement2-root-class-name9"></BackgroundGridWrapperelement2>
      <BackgroundGridWrapperelement2 rootClassName="background-grid-wrapperelement2-root-class-name10"></BackgroundGridWrapperelement2>
      <BackgroundGridWrapperelement2 rootClassName="background-grid-wrapperelement2-root-class-name11"></BackgroundGridWrapperelement2>
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
