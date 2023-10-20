import React from 'react'

import PropTypes from 'prop-types'

import BrandsSubheading2 from './brands-subheading2'
import './brands-subheading1.css'

const BrandsSubheading1 = (props) => {
  return (
    <div className={`brands-subheading1-container ${props.rootClassName} `}>
      <BrandsSubheading2 className=""></BrandsSubheading2>
    </div>
  )
}

BrandsSubheading1.defaultProps = {
  rootClassName: '',
}

BrandsSubheading1.propTypes = {
  rootClassName: PropTypes.string,
}

export default BrandsSubheading1
