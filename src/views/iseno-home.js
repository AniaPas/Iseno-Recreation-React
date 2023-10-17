import React from 'react'

import { Helmet } from 'react-helmet'

import BackgroundPattern from '../components/background-pattern'
import NavElement from '../components/nav-element'
import AnimatedBlockDark from '../components/animated-block-dark'
import SectionSubheading from '../components/section-subheading'
import './iseno-home.css'

const IsenoHome = (props) => {
  return (
    <div className="iseno-home-container">
      <Helmet>
        <title>Iseno Recreation</title>
        <meta property="og:title" content="Iseno Recreation" />
      </Helmet>
      <div className="iseno-home-background-grid-wrapper">
        <BackgroundPattern rootClassName="background-pattern-root-class-name"></BackgroundPattern>
        <BackgroundPattern rootClassName="background-pattern-root-class-name1"></BackgroundPattern>
        <BackgroundPattern rootClassName="background-pattern-root-class-name5"></BackgroundPattern>
        <BackgroundPattern rootClassName="background-pattern-root-class-name3"></BackgroundPattern>
        <BackgroundPattern rootClassName="background-pattern-root-class-name2"></BackgroundPattern>
        <BackgroundPattern rootClassName="background-pattern-root-class-name4"></BackgroundPattern>
      </div>
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
      <section className="iseno-home-hero-section">
        <h1 className="iseno-home-hero-sectionheading Heading1">
          <span>
            We provide integrated
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span>IT and marketing services</span>
        </h1>
        <p className="iseno-home-hero-sectionpara-main Content">
          Iseno is an international group of companies that can build your
          digital product from scratch to a ready-to-launch solution, execute
          UX/UI design or audit, and market your new or improved product to the
          right audience. We operate in fintech, e-commerce, medical and
          automotive industries. Apart from working hard on projects for our
          clients, we are engaged in creating a UX/UI community.
        </p>
        <p className="iseno-home-hero-sectionpara-secondary">
          <span>8 years of experience, 250+ projects completed,</span>
          <br></br>
          <span>100+ happy customers around the world</span>
        </p>
        <div className="iseno-home-read-more-button-wrapper">
          <AnimatedBlockDark rootClassName="animated-block-dark-root-class-name"></AnimatedBlockDark>
          <div className="iseno-home-read-more-button-wrapperbox">
            <img
              alt="arrow-down"
              src="https://iseno.net/images/button-show-more-arrow.svg"
              loading="lazy"
              className="iseno-home-read-more-button-wrappericon"
            />
          </div>
        </div>
      </section>
      <section className="iseno-home-mission-section">
        <h2 className="iseno-home-mission-section-heading">
          <span className="Heading2">Mission</span>
          <br></br>
        </h2>
        <SectionSubheading></SectionSubheading>
        <div className="iseno-home-animated-block-light"></div>
        <p className="iseno-home-text08 Content">
          <span className="iseno-home-text09">
            Our mission is to deliver the best quality technologically and
            visually advanced products from start to finish. For this reason, we
            combined all of our brands into one group so we can work on complex
            and integrated projects and exceed our client’s expectations.
          </span>
          <br className="iseno-home-text10"></br>
          <br className="iseno-home-text11"></br>
          <br className="iseno-home-text12"></br>
          <span className="iseno-home-text13">
            Our values are based on in-depth research, user-centricity, and
            clear communication. We believe in inclusivity, accessibility, and
            diversity when building our products and teams.
          </span>
          <br className="iseno-home-text14"></br>
          <br className="iseno-home-text15"></br>
          <span className="iseno-home-text16">
            In addition to working hard for our clients, we are building a UX
            community where anyone can participate in an open discussion about
            UX and we are developing a UX jo
          </span>
          <span className="iseno-home-text17">b search website.</span>
        </p>
      </section>
      <section className="iseno-home-mission-section1"></section>
    </div>
  )
}

export default IsenoHome
