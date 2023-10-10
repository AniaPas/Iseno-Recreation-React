import React from 'react'

import PropTypes from 'prop-types'

import './section-wrapper-light.css'

const SectionWrapperLight = (props) => {
  return (
    <div
      className={`section-wrapper-light-section-wrapper-light ${props.rootClassName} `}
    >
      <h1 className="section-wrapper-light-text">{props.text}</h1>
    </div>
  )
}

SectionWrapperLight.defaultProps = {
  rootClassName: '',
  text: 'We provide integrated IT and marketing services',
}

SectionWrapperLight.propTypes = {
  rootClassName: PropTypes.string,
  text: PropTypes.string,
}

export default SectionWrapperLight
