import React from 'react'

import PropTypes from 'prop-types'

import './brands-tile.css'

const BrandsTile = (props) => {
  return (
    <div className={`brands-tile-container ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="brands-tile-image"
      />
      <div className="brands-tile-container1">
        <h3 className="brands-tile-text">{props.text}</h3>
        <p className="brands-tile-text1 contentSmall">{props.text1}</p>
        <div className="brands-tile-container2">
          <p className="brands-tile-text2 GoToSiteText">{props.text2}</p>
        </div>
      </div>
    </div>
  )
}

BrandsTile.defaultProps = {
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  image_alt: 'image',
  text: 'e-pi.tech',
  text1:
    'e-ux.pro is an award winning company specialising in UX/UI design. All designs are preceded with a solid research. The team has rich experience in designing advanced products (CRM &amp; ERP systems, e-commerce platforms, SaaS, web &amp; mobile applications) and thrive in automotive, medical, and fintech industries.',
  rootClassName: '',
  text2: 'Go on site',
}

BrandsTile.propTypes = {
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  rootClassName: PropTypes.string,
  text2: PropTypes.string,
}

export default BrandsTile
