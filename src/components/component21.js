import React from 'react'

import PropTypes from 'prop-types'

import './component21.css'

const Component21 = (props) => {
  return <div className={`component21-container ${props.rootClassName} `}></div>
}

Component21.defaultProps = {
  rootClassName: '',
}

Component21.propTypes = {
  rootClassName: PropTypes.string,
}

export default Component21
