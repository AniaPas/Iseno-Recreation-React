import React from 'react'

import { Helmet } from 'react-helmet'

import NavElement from '../components/nav-element'
import './iseno-home.css'

const IsenoHome = (props) => {
  return (
    <div className="iseno-home-container">
      <Helmet>
        <title>Iseno Recreation</title>
        <meta property="og:title" content="Iseno Recreation" />
      </Helmet>
      <div className="iseno-home-header">
        <div className="iseno-home-menu-wrapper">
          <img
            alt="image"
            src="https://iseno.net/images/iseno-logo.svg"
            className="iseno-home-iseno-logo"
          />
          <a
            href="https://iseno.net/index.html"
            target="_blank"
            rel="noreferrer noopener"
            className="iseno-home-link"
          >
            <div className="iseno-home-navbar">
              <NavElement rootClassName="nav-element-root-class-name"></NavElement>
              <NavElement
                text="Brands"
                rootClassName="nav-element-root-class-name1"
              ></NavElement>
              <NavElement
                text="Team"
                rootClassName="nav-element-root-class-name2"
              ></NavElement>
              <NavElement
                text="Awards"
                rootClassName="nav-element-root-class-name3"
              ></NavElement>
              <NavElement
                text="Clients"
                rootClassName="nav-element-root-class-name4"
              ></NavElement>
            </div>
          </a>
          <div className="iseno-home-menu-wrapper-contactbox">
            <span className="iseno-home-menu-wrapper-contactbox-link">
              Contact
            </span>
            <div className="menu-wrapper__contactbox__img-wrapper">
              <img
                alt="arrow image"
                src="https://iseno.net/images/button-contact-arrow.svg"
                loading="lazy"
                className="iseno-home-menu-wrapper-contactbox-img-wrapper-arrow-img menu-wrapper__contactbox__img-wrapper"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="iseno-home-mission-section"></div>
      <div className="iseno-home-container1">
        <span>Text</span>
      </div>
    </div>
  )
}

export default IsenoHome
