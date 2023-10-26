import React from 'react'

import PropTypes from 'prop-types'

import './background-grid-wrapperelement2.css'

const BackgroundGridWrapperelement2 = (props) => {
  return (
    <div
      className={`background-grid-wrapperelement2-container ${props.rootClassName} `}
    ></div>
  )
}

BackgroundGridWrapperelement2.defaultProps = {
  rootClassName: '',
}

BackgroundGridWrapperelement2.propTypes = {
  rootClassName: PropTypes.string,
}

export default BackgroundGridWrapperelement2
