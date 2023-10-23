import React from 'react'

import PropTypes from 'prop-types'

import './component2.css'

const Component2 = (props) => {
  return <div className={`component2-container ${props.rootClassName} `}></div>
}

Component2.defaultProps = {
  rootClassName: '',
}

Component2.propTypes = {
  rootClassName: PropTypes.string,
}

export default Component2
