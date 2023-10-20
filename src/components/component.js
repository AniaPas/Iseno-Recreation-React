import React from 'react'

import PropTypes from 'prop-types'

import './component.css'

const AppComponent = (props) => {
  return (
    <div className={`app-component-container ${props.rootClassName} `}>
      <p className="app-component-text Heading2">{props.brands_h2}</p>
    </div>
  )
}

AppComponent.defaultProps = {
  brands_h2: 'Brands',
  text: 'Text',
  rootClassName: '',
}

AppComponent.propTypes = {
  brands_h2: PropTypes.string,
  text: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default AppComponent
