import React from 'react'

import PropTypes from 'prop-types'

import './team-wrappertile1.css'

const TeamWrappertile1 = (props) => {
  return (
    <div
      className={`team-wrappertile1-team-wrappertile ${props.rootClassName} `}
    >
      <img
        alt={props.team_wrapper__tile__img_alt}
        src={props.team_wrapper__tile__img_src}
        loading="lazy"
        className="team-wrappertile1-team-wrappertileimg"
      />
      <p className="team-wrappertile1-text teamNames">{props.text11}</p>
      <span className="teamJobs">{props.text2}</span>
    </div>
  )
}

TeamWrappertile1.defaultProps = {
  text2: 'CEO',
  rootClassName: '',
  text11: 'Koszowska-Kowalska',
  team_wrapper__tile__img_alt: 'Koszowska-Kowalska',
  team_wrapper__tile__img_src: '/adrianna--koszowska-kowalska-200h.png',
}

TeamWrappertile1.propTypes = {
  text2: PropTypes.string,
  rootClassName: PropTypes.string,
  text11: PropTypes.string,
  team_wrapper__tile__img_alt: PropTypes.string,
  team_wrapper__tile__img_src: PropTypes.string,
}

export default TeamWrappertile1
