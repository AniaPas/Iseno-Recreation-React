import React from 'react'

import PropTypes from 'prop-types'

import './awards-wrapper7.css'

const AwardsWrapper7 = (props) => {
  return (
    <div className={`awards-wrapper7-awards-wrapper ${props.rootClassName} `}>
      <img
        alt={props.awards_wrapper__img_alt}
        src={props.awards_wrapper__img_src}
        className="awards-wrapper7-awards-wrapperimg"
      />
      <div className="awards-wrapper7-awards-wrapperblock">
        <p className="awards-wrapper7-awards-wrapperblockaward-name">
          {props.awards_wrapper__block__award_name}
        </p>
        <div className="awards-wrapper7-awards-wrapperblocktext-container">
          <p className="awards-wrapper7-awards-wrapperblocktext-containerbrand-name awardsWrapperBrand">
            {props.awards_wrapper__block__text_container__brand_name}
          </p>
          {props.children}
        </div>
      </div>
    </div>
  )
}

AwardsWrapper7.defaultProps = {
  text2: 'Text',
  text1: 'Text',
  awards_wrapper__img_src: '/clutch-logo.svg',
  rootClassName: '',
  text3: 'Text',
  awards_wrapper__block__award_name: 'Clutch                                 ',
  text: '2nd place Top Women Owned Product Designers & Developers in the World 3rd place Top Poland User Experience Consultants 2nd place Top Warsaw User Experience Consultants 3rd place Top Women-Owned User Experience (UX) Agencies Ranked in Top Warsaw Design Companies Ranked in Top Poland Digital Design Companies Ranked in Top Poland Product Designers',
  awards_wrapper__block__text_container__brand_name: 'e-ux.pro',
  awards_wrapper__img_alt: 'image',
}

AwardsWrapper7.propTypes = {
  text2: PropTypes.string,
  text1: PropTypes.string,
  awards_wrapper__img_src: PropTypes.string,
  rootClassName: PropTypes.string,
  text3: PropTypes.string,
  awards_wrapper__block__award_name: PropTypes.string,
  text: PropTypes.string,
  awards_wrapper__block__text_container__brand_name: PropTypes.string,
  awards_wrapper__img_alt: PropTypes.string,
}

export default AwardsWrapper7
