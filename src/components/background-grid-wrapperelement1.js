import React from 'react'

import PropTypes from 'prop-types'

import './background-grid-wrapperelement1.css'

const BackgroundGridWrapperelement1 = (props) => {
  return (
    <div
      className={`background-grid-wrapperelement1-container ${props.rootClassName} `}
    ></div>
  )
}

BackgroundGridWrapperelement1.defaultProps = {
  rootClassName: '',
}

BackgroundGridWrapperelement1.propTypes = {
  rootClassName: PropTypes.string,
}

export default BackgroundGridWrapperelement1
