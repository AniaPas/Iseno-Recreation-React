import React from 'react'

import PropTypes from 'prop-types'

import './animated-block-light.css'

const AnimatedBlockLight = (props) => {
  return (
    <div
      className={`animated-block-light-animated-block-light ${props.rootClassName} `}
    ></div>
  )
}

AnimatedBlockLight.defaultProps = {
  rootClassName: '',
}

AnimatedBlockLight.propTypes = {
  rootClassName: PropTypes.string,
}

export default AnimatedBlockLight
