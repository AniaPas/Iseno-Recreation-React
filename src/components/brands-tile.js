import React from 'react'

import PropTypes from 'prop-types'

import './brands-tile.css'

const BrandsTile = (props) => {
  return (
    <div className={`brands-tile-container ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        loading="lazy"
        src={props.image_src}
        className="brands-tile-image"
      />
      <div className="brands-tile-container1">
        <h3 className="brands-tile-text">{props.text}</h3>
        <p className="brands-tile-text1 contentSmall">{props.text1}</p>
        <div className="brands-tile-container2">
          <p className="brands-tile-text2 GoToSiteText">{props.text2}</p>
          <img
            src={props.image_src1}
            alt={props.image_alt1}
            className="brands-tile-image1"
          />
        </div>
      </div>
    </div>
  )
}

BrandsTile.defaultProps = {
  image_alt: 'image',
  text: 'e-ux.pro',
  text1:
    'e-ux.pro is an award winning company specialising in UX/UI design. All designs are preceded with a solid research. The team has rich experience in designing advanced products (CRM &amp; ERP systems, e-commerce platforms, SaaS, web &amp; mobile applications) and thrive in automotive, medical, and fintech industries.',
  rootClassName: '',
  text2: 'Go on site',
  image_src4: '8757bbf2-b3f9-480e-90b4-d7d46aa96bf0',
  image_src: '/e-ux.pro-hover.svg',
  image_src1: '/arrow-link.svg',
  image_alt1: 'image',
}

BrandsTile.propTypes = {
  image_alt: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  rootClassName: PropTypes.string,
  text2: PropTypes.string,
  image_src4: PropTypes.string,
  image_src: PropTypes.string,
  image_src1: PropTypes.string,
  image_alt1: PropTypes.string,
}

export default BrandsTile
