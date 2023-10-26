import React from 'react'

import PropTypes from 'prop-types'

import BackgroundGridWrapperelement2 from './background-grid-wrapperelement2'
import BackgroundGridWrapperelement1 from './background-grid-wrapperelement1'
import BackgroundGridWrapperelement from './background-grid-wrapperelement'
import './background-grid-wrapper1.css'

const BackgroundGridWrapper1 = (props) => {
  return (
    <div className="background-grid-wrapper1-background-grid-wrapper">
      <BackgroundGridWrapperelement2 rootClassName="background-grid-wrapperelement2-root-class-name"></BackgroundGridWrapperelement2>
      <BackgroundGridWrapperelement1 rootClassName="background-grid-wrapperelement1-root-class-name1"></BackgroundGridWrapperelement1>
      <BackgroundGridWrapperelement rootClassName="background-grid-wrapperelement-root-class-name1"></BackgroundGridWrapperelement>
      <BackgroundGridWrapperelement2 rootClassName="background-grid-wrapperelement2-root-class-name5"></BackgroundGridWrapperelement2>
      <BackgroundGridWrapperelement2 rootClassName="background-grid-wrapperelement2-root-class-name6"></BackgroundGridWrapperelement2>
      <BackgroundGridWrapperelement2 rootClassName="background-grid-wrapperelement2-root-class-name7"></BackgroundGridWrapperelement2>
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
