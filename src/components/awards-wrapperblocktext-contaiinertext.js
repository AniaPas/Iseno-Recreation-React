import React from 'react'

import PropTypes from 'prop-types'

import './awards-wrapperblocktext-contaiinertext.css'

const AwardsWrapperblocktextContaiinertext = (props) => {
  return (
    <div
      className={`awards-wrapperblocktext-contaiinertext-container ${props.rootClassName} `}
    >
      <p className="awards-wrapperblocktext-contaiinertext-text">
        <span>
          2nd place Top Women Owned Product Designers &amp; Developers in the
          World
        </span>
        <br></br>
        <span>3rd place Top Poland User Experience Consultants</span>
        <br></br>
        <span>2nd place Top Warsaw User Experience Consultants</span>
        <br></br>
        <span>3rd place Top Women-Owned User Experience (UX) Agencies</span>
        <br></br>
        <span>Ranked in Top Warsaw Design Companies</span>
        <br></br>
        <span>Ranked in Top Poland Digital Design Companies</span>
        <br></br>
        <span>Ranked in Top Poland P</span>
        <span>roduct Designers</span>
      </p>
    </div>
  )
}

AwardsWrapperblocktextContaiinertext.defaultProps = {
  rootClassName: '',
}

AwardsWrapperblocktextContaiinertext.propTypes = {
  rootClassName: PropTypes.string,
}

export default AwardsWrapperblocktextContaiinertext
