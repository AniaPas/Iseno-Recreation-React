import React from 'react'

import PropTypes from 'prop-types'

import './nav-element.css'

const NavElement = (props) => {
  return (
    <div className={`nav-element-container ${props.rootClassName} `}>
      <a
        href={props.link_text}
        target="_blank"
        rel="noreferrer noopener"
        className="nav-element-link"
      >
        <p className="nav-element-nav-element-text">{props.text}</p>
      </a>
    </div>
  )
}

NavElement.defaultProps = {
  link_text: 'https://example.com',
  rootClassName: '',
  text: 'Mission',
}

NavElement.propTypes = {
  link_text: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.string,
}

export default NavElement
