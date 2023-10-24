import React from 'react'

import PropTypes from 'prop-types'

import './team-background-grid-wrappertile-s.css'

const TeamBackgroundGridWrappertileS = (props) => {
  return (
    <div
      className={`team-background-grid-wrappertile-s-team-background-grid-wrappertile-s ${props.rootClassName} `}
    ></div>
  )
}

TeamBackgroundGridWrappertileS.defaultProps = {
  rootClassName: '',
}

TeamBackgroundGridWrappertileS.propTypes = {
  rootClassName: PropTypes.string,
}

export default TeamBackgroundGridWrappertileS
