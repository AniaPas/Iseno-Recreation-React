import React from 'react'

import PropTypes from 'prop-types'

import './section-wrapper-light.css'

const SectionWrapperLight = (props) => {
  return (
    <div
      className={`section-wrapper-light-section-wrapper-light ${props.rootClassName} `}
    >
      <h1 className="section-wrapper-light-text Heading1">{props.heading}</h1>
      <p className="section-wrapper-light-text1 Content">
        {props.missionParagraph}
      </p>
    </div>
  )
}

SectionWrapperLight.defaultProps = {
  rootClassName: '',
  missionParagraph:
    'Iseno is an international group of companies that can build your digital product from scratch to a ready-to-launch solution, execute UX/UI design or audit, and market your new or improved product to the right audience. We operate in fintech, e-commerce, medical and automotive industries. Apart from working hard on projects for our clients, we are engaged in creating a UX/UI community.',
  heading: 'We provide integrated IT and marketing services',
}

SectionWrapperLight.propTypes = {
  rootClassName: PropTypes.string,
  missionParagraph: PropTypes.string,
  heading: PropTypes.string,
}

export default SectionWrapperLight
