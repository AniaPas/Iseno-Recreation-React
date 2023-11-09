import React from 'react'

import PropTypes from 'prop-types'

import Component4 from './component4'
import './team-wrappertile.css'

const TeamWrappertile = (props) => {
  return (
    <div className="team-wrappertile-team-wrappertile">
      <div className="team-wrappertile-container">
        <img
          alt={props.team_wrapper__tile__img_alt}
          src={props.team_wrapper__tile__img_src}
          loading="lazy"
          className="team-wrappertile-team-wrappertileimg"
        />
      </div>
      <div className="team-wrappertile-container1">
        <div className="team-wrappertile-container2">
          <Component4></Component4>
        </div>
      </div>
      <span className="team-wrappertile-text teamJobs">{props.text}</span>
    </div>
  )
}

TeamWrappertile.defaultProps = {
  team_wrapper__tile__img_src: '4a819709-1f82-4253-93b0-87189f4e671b',
  team_wrapper__tile__img_alt: 'Adrianna Koszowska-Kowalska',
  text: 'CEO',
}

TeamWrappertile.propTypes = {
  team_wrapper__tile__img_src: PropTypes.string,
  team_wrapper__tile__img_alt: PropTypes.string,
  text: PropTypes.string,
}

export default TeamWrappertile
