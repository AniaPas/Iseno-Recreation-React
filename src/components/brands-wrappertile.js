import React from 'react'

import PropTypes from 'prop-types'

import './brands-wrappertile.css'

const BrandsWrappertile = (props) => {
  return (
    <div className={`brands-wrappertile-container ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        loading="lazy"
        className="brands-wrappertile-image"
      />
      <div className="brands-wrappertile-container1">
        <h3 className="brands-wrappertile-text">{props.text}</h3>
        <p className="brands-wrappertile-text1 contentSmall">{props.text1}</p>
        <div className="brands-wrappertile-container2">
          <p className="brands-wrappertile-text2 GoToSiteText">{props.text2}</p>
          <img
            alt={props.image_alt1}
            src={props.image_src1}
            className="brands-wrappertile-image1"
          />
        </div>
      </div>
    </div>
  )
}

BrandsWrappertile.defaultProps = {
  image_src1: '/arrow-link.svg',
  image_alt: 'image',
  text: 'e-ux.pro',
  text1:
    'e-ux.pro is an award winning company specialising in UX/UI design. All designs are preceded with a solid research. The team has rich experience in designing advanced products (CRM &amp; ERP systems, e-commerce platforms, SaaS, web &amp; mobile applications) and thrive in automotive, medical, and fintech industries.',
  image_alt1: 'image',
  rootClassName: '',
  image_src: '/e-ux.pro-hover.svg',
  image_src4: '/e-ux.pro-hover.svg',
  text2: 'Go on site',
}

BrandsWrappertile.propTypes = {
  image_src1: PropTypes.string,
  image_alt: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  image_alt1: PropTypes.string,
  rootClassName: PropTypes.string,
  image_src: PropTypes.string,
  image_src4: PropTypes.string,
  text2: PropTypes.string,
}

export default BrandsWrappertile
