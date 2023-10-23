import React from 'react'

import PropTypes from 'prop-types'

import './component1.css'

const Component1 = (props) => {
  return <div className={`component1-container ${props.rootClassName} `}></div>
}

Component1.defaultProps = {
  rootClassName: '',
}

Component1.propTypes = {
  rootClassName: PropTypes.string,
}

export default Component1
