import React from 'react'

import PropTypes from 'prop-types'

import './team-wrappertileimg.css'

const TeamWrappertileimg = (props) => {
  return (
    <div className="team-wrappertileimg-container">
      <img
        alt={props.team_wrapper__tile__img_alt}
        src={props.team_wrapper__tile__img_src}
        loading="lazy"
        className="team-wrappertileimg-team-wrappertileimg"
      />
    </div>
  )
}

TeamWrappertileimg.defaultProps = {
  team_wrapper__tile__img_src: '/adrianna--koszowska-kowalska-200h.png',
  team_wrapper__tile__img_alt: 'Adrianna Koszowska-Kowalska',
}

TeamWrappertileimg.propTypes = {
  team_wrapper__tile__img_src: PropTypes.string,
  team_wrapper__tile__img_alt: PropTypes.string,
}

export default TeamWrappertileimg
