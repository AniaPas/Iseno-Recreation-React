import React from 'react'

import PropTypes from 'prop-types'

import './animated-block-dark.css'

const AnimatedBlockDark = (props) => {
  return (
    <div
      className={`animated-block-dark-animated-block-black ${props.rootClassName} `}
    ></div>
  )
}

AnimatedBlockDark.defaultProps = {
  rootClassName: '',
}

AnimatedBlockDark.propTypes = {
  rootClassName: PropTypes.string,
}

export default AnimatedBlockDark
