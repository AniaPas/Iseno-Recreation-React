import React from 'react'

import { Helmet } from 'react-helmet'

import BackgroundGridWrapper from '../components/background-grid-wrapper'
import NavElement from '../components/nav-element'
import AnimatedBlockDark from '../components/animated-block-dark'
import SectionSubheading from '../components/section-subheading'
import BrandsWrappertile from '../components/brands-wrappertile'
import BackgroundGridWrapper3 from '../components/background-grid-wrapper3'
import AnimatedBlockDarkLong from '../components/animated-block-dark-long'
import './iseno-home.css'

const IsenoHome = (props) => {
  return (
    <div className="iseno-home-container">
      <Helmet>
        <title>Iseno Recreation</title>
        <meta property="og:title" content="Iseno Recreation" />
      </Helmet>
      <BackgroundGridWrapper rootClassName="background-grid-wrapper-root-class-name"></BackgroundGridWrapper>
      <div className="iseno-home-header">
        <div className="iseno-home-menu-wrapper">
          <img
            alt="image"
            src="/iseno-logo.svg"
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
                src="/external/button-contact-arrow.svg"
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
              src="/external/button-show-more-arrow.svg"
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
        <p className="iseno-home-mission-paragraph Content">
          <span className="iseno-home-text08">
            Our mission is to deliver the best quality technologically and
            visually advanced products from start to finish. For this reason, we
            combined all of our brands into one group so we can work on complex
            and integrated projects and exceed our client’s expectations.
          </span>
          <br className="iseno-home-text09"></br>
          <br className="iseno-home-text10"></br>
          <br className="iseno-home-text11"></br>
          <span className="iseno-home-text12">
            Our values are based on in-depth research, user-centricity, and
            clear communication. We believe in inclusivity, accessibility, and
            diversity when building our products and teams.
          </span>
          <br className="iseno-home-text13"></br>
          <br className="iseno-home-text14"></br>
          <span className="iseno-home-text15">
            In addition to working hard for our clients, we are building a UX
            community where anyone can participate in an open discussion about
            UX and we are developing a UX jo
          </span>
          <span className="iseno-home-text16">b search website.</span>
        </p>
      </section>
      <section className="iseno-home-brands-section">
        <h2 className="iseno-home-text17">Brands</h2>
        <p className="iseno-home-text18">
          <span>Alone we can do so little, </span>
          <br></br>
          <span>together we can do so much</span>
          <br></br>
        </p>
        <div className="iseno-home-animated-block-dark"></div>
        <div className="iseno-home-brands-wrapper">
          <BrandsWrappertile
            image_alt="e-ux.pro-hover logo"
            image_src="/e-ux.pro-hover.svg"
            rootClassName="brands-wrappertile-root-class-name1"
          ></BrandsWrappertile>
          <BrandsWrappertile
            text="e-pi.tech"
            text1="e-pi.tech is a front and back end web and mobile development company. They produce finished potentially ready-to-release products using Symfony, Flutter, and React.js/angular technology. They work with advanced CRM, ERP and SaaS applications, and they have a vast experience working in fintech industry."
            image_alt="e-pi.tech-hover logo"
            image_src="/e-pi.tech-hover.svg"
            image_src1="/arrow-link.svg"
            rootClassName="brands-wrappertile-root-class-name2"
          ></BrandsWrappertile>
          <BrandsWrappertile
            text="Wearlyme"
            text1="Wearlyme is a place where you can both buy and sell used clothes and accessories. It was started on the initiative to encourage people to choose the form of shopping, which is convenient, easy, and eco-friendly."
            image_src="/wearly-hover.svg"
            rootClassName="brands-wrappertile-root-class-name3"
          ></BrandsWrappertile>
          <BrandsWrappertile
            text="xPower"
            text1="xPower is a UX mentoring space with a goal to help people improve their skills and have a jump start in the UX industry. We welcome researchers, writers, designers, and project managers. We mainly communicate in English, but there are also Polish and Spanish communication channels on Discord."
            image_src="/xpower-hover.svg"
            image_src4="/xpower-hover.svg"
            rootClassName="brands-wrappertile-root-class-name"
          ></BrandsWrappertile>
        </div>
      </section>
      <section className="iseno-home-team-section">
        <BackgroundGridWrapper3 rootClassName="background-grid-wrapper3-root-class-name"></BackgroundGridWrapper3>
        <h2 className="iseno-home-text23">Team</h2>
        <p className="iseno-home-text24 Subheading">
          <span>We connect talents</span>
          <br></br>
          <span>from all over the world</span>
          <br></br>
        </p>
        <AnimatedBlockDarkLong rootClassName="animated-block-dark-long-root-class-name"></AnimatedBlockDarkLong>
        <p className="iseno-home-text29">
          Our company operates 100% remotely, meaning we have access to the best
          international talent for your project and that we are always available
          for our clients no matter where they are located. Our clients find
          working with us online to be economical and time-efficient. There is
          no limit to what we can do together
        </p>
        <div className="iseno-home-container1">
          <span>Text</span>
          <p className="iseno-home-hero-sectionpara-main1 Content">
            Iseno is an international group of companies that can build your
            digital product from scratch to a ready-to-launch solution, execute
            UX/UI design or audit, and market your new or improved product to
            the right audience. We operate in fintech, e-commerce, medical and
            automotive industries. Apart from working hard on projects for our
            clients, we are engaged in creating a UX/UI community.
          </p>
        </div>
      </section>
    </div>
  )
}

export default IsenoHome
