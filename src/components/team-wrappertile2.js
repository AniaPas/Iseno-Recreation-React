import React from 'react'

import PropTypes from 'prop-types'

import './team-wrappertile2.css'

const TeamWrappertile2 = (props) => {
  return (
    <div className="team-wrappertile2-team-wrappertile">
      <img
        alt={props.team_wrapper__tile__img_alt}
        src={props.team_wrapper__tile__img_src}
        loading="lazy"
        className="team-wrappertile2-team-wrappertileimg"
      />
      <p className="team-wrappertile2-text teamNames">{props.text}</p>
      <p className="team-wrappertile2-text1 teamNames">{props.text1}</p>
      <span className="teamJobs">{props.text2}</span>
    </div>
  )
}

TeamWrappertile2.defaultProps = {
  text: 'Adrianna',
  team_wrapper__tile__img_alt: 'Koszowska-Kowalska',
  text2: 'CEO',
  team_wrapper__tile__img_src: '/adrianna--koszowska-kowalska-200h.png',
  text1: 'Koszowska-Kowalska',
}

TeamWrappertile2.propTypes = {
  text: PropTypes.string,
  team_wrapper__tile__img_alt: PropTypes.string,
  text2: PropTypes.string,
  team_wrapper__tile__img_src: PropTypes.string,
  text1: PropTypes.string,
}

export default TeamWrappertile2
