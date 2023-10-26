import React from 'react'

import PropTypes from 'prop-types'

import './background-grid-wrapperelement.css'

const BackgroundGridWrapperelement = (props) => {
  return (
    <div
      className={`background-grid-wrapperelement-container ${props.rootClassName} `}
    ></div>
  )
}

BackgroundGridWrapperelement.defaultProps = {
  rootClassName: '',
}

BackgroundGridWrapperelement.propTypes = {
  rootClassName: PropTypes.string,
}

export default BackgroundGridWrapperelement
