import React from 'react'

import PropTypes from 'prop-types'

import './animated-block-dark-long.css'

const AnimatedBlockDarkLong = (props) => {
  return (
    <div
      className={`animated-block-dark-long-animated-block-black ${props.rootClassName} `}
    ></div>
  )
}

AnimatedBlockDarkLong.defaultProps = {
  rootClassName: '',
}

AnimatedBlockDarkLong.propTypes = {
  rootClassName: PropTypes.string,
}

export default AnimatedBlockDarkLong
