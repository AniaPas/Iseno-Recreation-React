import React from 'react'

import PropTypes from 'prop-types'

import './component11.css'

const Component11 = (props) => {
  return <div className={`component11-container ${props.rootClassName} `}></div>
}

Component11.defaultProps = {
  rootClassName: '',
}

Component11.propTypes = {
  rootClassName: PropTypes.string,
}

export default Component11
