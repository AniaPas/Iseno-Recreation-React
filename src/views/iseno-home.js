import React from 'react'

import { Helmet } from 'react-helmet'

import BackgroundGridWrapper from '../components/background-grid-wrapper'
import NavElement from '../components/nav-element'
import AnimatedBlockDark from '../components/animated-block-dark'
import AnimatedBlockLight from '../components/animated-block-light'
import BrandsWrappertile from '../components/brands-wrappertile'
import BackgroundGridWrapper3 from '../components/background-grid-wrapper3'
import AnimatedBlockDarkLong from '../components/animated-block-dark-long'
import TeamWrappertile2 from '../components/team-wrappertile2'
import TeamWrappertile1 from '../components/team-wrappertile1'
import AwardsWrapper7 from '../components/awards-wrapper7'
import Component5 from '../components/component5'
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
        <h2 className="iseno-home-mission-sectionh2-heading">
          <span className="Heading2">Mission</span>
          <br></br>
        </h2>
        <p className="iseno-home-mission-sectionsubheading Subheading">
          <span>Designing for</span>
          <br></br>
          <span>impact</span>
          <br></br>
        </p>
        <AnimatedBlockLight></AnimatedBlockLight>
        <p className="iseno-home-mission-paragraph Content">
          <span className="iseno-home-text12">
            Our mission is to deliver the best quality technologically and
            visually advanced products from start to finish. For this reason, we
            combined all of our brands into one group so we can work on complex
            and integrated projects and exceed our client’s expectations.
          </span>
          <br className="iseno-home-text13"></br>
          <br className="iseno-home-text14"></br>
          <br className="iseno-home-text15"></br>
          <span className="iseno-home-text16">
            Our values are based on in-depth research, user-centricity, and
            clear communication. We believe in inclusivity, accessibility, and
            diversity when building our products and teams.
          </span>
          <br className="iseno-home-text17"></br>
          <br className="iseno-home-text18"></br>
          <span className="iseno-home-text19">
            In addition to working hard for our clients, we are building a UX
            community where anyone can participate in an open discussion about
            UX and we are developing a UX jo
          </span>
          <span className="iseno-home-text20">b search website.</span>
        </p>
      </section>
      <section className="iseno-home-brands-section">
        <h2 className="iseno-home-brands-sectionh2-heading">Brands</h2>
        <p className="iseno-home-brands-sectionsubheading">
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
        <h2 className="iseno-home-team-sectionh2-heading">Team</h2>
        <p className="iseno-home-team-sectionsubheading Subheading">
          <span>We connect talents</span>
          <br></br>
          <span>from all over the world</span>
          <br></br>
        </p>
        <AnimatedBlockDarkLong rootClassName="animated-block-dark-long-root-class-name"></AnimatedBlockDarkLong>
        <p className="iseno-home-team-sectionpara">
          Our company operates 100% remotely, meaning we have access to the best
          international talent for your project and that we are always available
          for our clients no matter where they are located. Our clients find
          working with us online to be economical and time-efficient. There is
          no limit to what we can do together
        </p>
        <div className="iseno-home-team-wrapper-top">
          <span className="iseno-home-team-wrapperfunction-text Heading3">
            Co-founders
          </span>
          <TeamWrappertile2></TeamWrappertile2>
          <TeamWrappertile1
            text1=" "
            text2="CTO"
            text11="Tomasz Kowalski"
            rootClassName="team-wrappertile1-root-class-name2"
            team_wrapper__tile__img_alt="Tomasz Kowalski"
            team_wrapper__tile__img_src="/tomasz-kowalski-200h.png"
          ></TeamWrappertile1>
        </div>
        <div className="iseno-home-team-wrapper-bottom">
          <span className="iseno-home-team-wrapperfunction-text1 Heading3">
            Management
          </span>
          <TeamWrappertile1
            text1=" "
            text2="Lead UX/UI Designer"
            text11="Izabela Kozioł"
            rootClassName="team-wrappertile1-root-class-name3"
            team_wrapper__tile__img_alt="Tomasz Kowalski"
            team_wrapper__tile__img_src="/izabela--koziol1-200h.png"
          ></TeamWrappertile1>
          <TeamWrappertile1
            text1=" "
            text2="Project Manager"
            text11="Zofia Kulikowska"
            rootClassName="team-wrappertile1-root-class-name5"
            team_wrapper__tile__img_alt="Tomasz Kowalski"
            team_wrapper__tile__img_src="/zofia--kulikowska-200h.png"
          ></TeamWrappertile1>
          <TeamWrappertile1
            text1=" "
            text2="Leader &amp; Developer"
            text11="Dawid Banachowski"
            rootClassName="team-wrappertile1-root-class-name4"
            team_wrapper__tile__img_alt="Tomasz Kowalski"
            team_wrapper__tile__img_src="/dawid-banachowski-200h.png"
          ></TeamWrappertile1>
        </div>
      </section>
      <section className="iseno-home-awards-section">
        <h2 className="iseno-home-awards-sectionh2-heading">Awards</h2>
        <p className="iseno-home-awards-sectionsubheading Subheading">
          <span>Appreciated </span>
          <br></br>
          <span>by the best</span>
          <br></br>
        </p>
        <AnimatedBlockLight rootClassName="animated-block-light-root-class-name"></AnimatedBlockLight>
        <AwardsWrapper7
          text3="2nd place Top Women Owned Product Designers &amp; Developers in the World 3rd place Top Poland User Experience Consultants 2nd place Top Warsaw User Experience Consultants 3rd place Top Women-Owned User Experience (UX) Agencies Ranked in Top Warsaw Design Companies Ranked in Top Poland Digital Design Companies Ranked in Top Poland Product Designers"
          rootClassName="awards-wrapper7-root-class-name"
        >
          <p className="iseno-home-text33">
            <span>
              2nd place Top Women Owned Product Designers &amp; Developers in
              the World
            </span>
            <br className="iseno-home-text35"></br>
            <span>3rd place Top Poland User Experience Consultants</span>
            <br className="iseno-home-text37"></br>
            <span>2nd place Top Warsaw User Experience Consultants</span>
            <br className="iseno-home-text39"></br>
            <span>3rd place Top Women-Owned User Experience (UX) Agencies</span>
            <br className="iseno-home-text41"></br>
            <span>Ranked in Top Warsaw Design Companies</span>
            <br className="iseno-home-text43"></br>
            <span>Ranked in Top Poland Digital Design Companies</span>
            <br className="iseno-home-text45"></br>
            <span>Ranked in Top Poland Product Designers</span>
          </p>
        </AwardsWrapper7>
        <div className="iseno-home-awards-wrapper">
          <img
            alt="image"
            src="/themanifest-logo.svg"
            className="iseno-home-awards-wrapperimg"
          />
          <div className="iseno-home-awards-wrapperblock">
            <p className="iseno-home-awards-wrapperblockaward-name">
              The Manifest
            </p>
            <div className="iseno-home-awards-wrapperblocktext-container">
              <p className="iseno-home-awards-wrapperblocktext-containerbrand-name awardsWrapperBrand">
                e-ux.pro
              </p>
              <p className="iseno-home-awards-wrapperblocktext-containerrating-text">
                <span>
                  2nd place Top Women Owned Product Designers &amp; Developers
                  in the World
                </span>
                <br className="iseno-home-text48"></br>
                <span>3rd place Top Poland User Experience Consultants</span>
                <br className="iseno-home-text50"></br>
                <span>2nd place Top Warsaw User Experience Consultants</span>
                <br className="iseno-home-text52"></br>
                <span>
                  3rd place Top Women-Owned User Experience (UX) Agencies
                </span>
                <br className="iseno-home-text54"></br>
                <span>Ranked in Top Warsaw Design Companies</span>
                <br className="iseno-home-text56"></br>
                <span>Ranked in Top Poland Digital Design Companies</span>
                <br className="iseno-home-text58"></br>
                <span>Ranked in Top Poland Product Designers</span>
              </p>
            </div>
            <div className="iseno-home-awards-wrapperblocktext-container1">
              <p className="iseno-home-awards-wrapperblocktext-containerbrand-name1 awardsWrapperBrand">
                e-pi.tech
              </p>
              <p className="iseno-home-text60">
                <span>
                  2th place in TOP 40 E-commerce Development Companies in Warsaw
                </span>
                <br className="iseno-home-text62"></br>
                <span>
                  Ranked in Top 30 Flutter App Development Companies in Warsaw
                </span>
              </p>
            </div>
          </div>
        </div>
        <AwardsWrapper7
          rootClassName="awards-wrapper7-root-class-name1"
          awards_wrapper__img_src="/designrush-logo.svg"
          awards_wrapper__block__award_name="DesignRush"
        >
          <p className="iseno-home-awards-wrapperblocktext-containerrating-text1 awardsRanked">
            Ranked in Top 30 UX Agency in UK
          </p>
        </AwardsWrapper7>
        <AwardsWrapper7
          rootClassName="awards-wrapper7-root-class-name3"
          awards_wrapper__img_src="/top-design-firms-logo.svg"
          awards_wrapper__block__award_name="TOP Design Firms"
        >
          <p className="iseno-home-awards-wrapperblocktext-containerrating-text2">
            <span>Ranked in 90 Product Design Companies in Poland</span>
            <br></br>
            <span>Ranked in 100 User Experience (UX) Companies in Poland</span>
            <br></br>
            <span>Ranked in 100 Digital Design Services in Poland</span>
          </p>
        </AwardsWrapper7>
        <AwardsWrapper7
          rootClassName="awards-wrapper7-root-class-name4"
          awards_wrapper__img_src="/techreviewer_logo.svg"
          awards_wrapper__block__award_name="Tech Reviewer"
        >
          <p className="iseno-home-awards-wrapperblocktext-containerrating-text3">
            Ranked in 50+ Top Web Design Companies in 2021
          </p>
        </AwardsWrapper7>
        <AwardsWrapper7
          rootClassName="awards-wrapper7-root-class-name5"
          awards_wrapper__img_src="/sortlist-logo.svg"
          awards_wrapper__block__award_name="sortlist"
        >
          <p className="iseno-home-awards-wrapperblocktext-containerrating-text4">
            Best User Experience Agencies in West Midlands
          </p>
        </AwardsWrapper7>
      </section>
      <section className="iseno-home-clients-section">
        <h2 className="iseno-home-team-sectionh2-heading1">Team</h2>
        <p className="iseno-home-team-sectionsubheading1 Subheading">
          <span className="iseno-home-text69">We help companies </span>
          <br></br>
          <span>to increase their values</span>
          <br></br>
        </p>
        <AnimatedBlockDarkLong rootClassName="animated-block-dark-long-root-class-name1"></AnimatedBlockDarkLong>
        <div className="iseno-home-clients-grid">
          <div className="iseno-home-container01">
            <div className="iseno-home-container02">
              <img
                alt="image"
                src="/clients/p-way-logo3.svg"
                className="iseno-home-image"
              />
              <img
                alt="image"
                src="/clients/oriflame-logo.svg"
                className="iseno-home-image01"
              />
            </div>
            <img
              alt="image"
              src="/clients/fimple-logo.svg"
              className="iseno-home-image02"
            />
          </div>
          <div className="iseno-home-container03">
            <div className="iseno-home-container04">
              <img
                alt="image"
                src="/clients/zap%C3%A5%C2%82ac-recepte-logo.svg"
                className="iseno-home-image03"
              />
              <img
                alt="image"
                src="/clients/decathlon-logo2.svg"
                className="iseno-home-image04"
              />
            </div>
            <img
              alt="image"
              src="/clients/group-renault-logo.svg"
              className="iseno-home-image05"
            />
          </div>
          <div className="iseno-home-container05">
            <div className="iseno-home-container06">
              <img
                alt="image"
                src="/clients/petit-amelie-logo1.svg"
                className="iseno-home-image06"
              />
              <img
                alt="image"
                src="/clients/med-patent-logo.svg"
                className="iseno-home-image07"
              />
            </div>
            <img
              alt="image"
              src="/clients/mtisubishi-motors-logo.svg"
              className="iseno-home-image08"
            />
          </div>
          <div className="iseno-home-container07">
            <div className="iseno-home-container08">
              <img
                alt="image"
                src="/clients/pet-express-logo.svg"
                className="iseno-home-image09"
              />
              <img
                alt="image"
                src="/clients/floomli-logo2.svg"
                className="iseno-home-image10"
              />
            </div>
            <img
              alt="image"
              src="/clients/repsol-logo.svg"
              className="iseno-home-image11"
            />
          </div>
        </div>
      </section>
      <section className="iseno-home-footer">
        <div className="iseno-home-footer-container">
          <div className="iseno-home-footer-containerlinks-wrapper">
            <div className="iseno-home-footer-containerlinks-wrapperbox">
              <p className="iseno-home-footer-containerlinks-wrapperboxlink-text">
                UX/UI Design
              </p>
              <img
                alt="image"
                src="/arrow-footer.svg"
                className="iseno-home-footer-containerlinks-wrapperboxlink-img"
              />
            </div>
            <div className="iseno-home-footer-containerlinks-wrapperbox1">
              <p className="iseno-home-footer-containerlinks-wrapperboxlink-text1">
                Development
              </p>
              <img
                alt="image"
                src="/arrow-footer.svg"
                className="iseno-home-footer-containerlinks-wrapperboxlink-img1"
              />
            </div>
            <div className="iseno-home-footer-containerlinks-wrapperbox2">
              <p className="iseno-home-footer-containerlinks-wrapperboxlink-text2">
                Design Community
              </p>
              <img
                alt="image"
                src="/arrow-footer.svg"
                className="iseno-home-footer-containerlinks-wrapperboxlink-img2"
              />
            </div>
          </div>
          <div className="iseno-home-footer-containerinfo-box">
            <img
              alt="image"
              src="/iseno-group-logo.svg"
              className="iseno-home-iseno-group-logo-img"
            />
            <p className="iseno-home-text73">E-mail</p>
            <span className="iseno-home-text74">office@iseno.net</span>
            <span className="iseno-home-text75 awardsWrapperBrand">
              ISENO SP. Z O.O.
            </span>
            <span className="iseno-home-text76">
              <span>Plac Bankowy 2, 00-095 Warszawa</span>
              <br></br>
              <span>Sąd Rejonowy dla m.st. Warszawy w Warszawie,</span>
              <br></br>
              <span>
                XIII Wydział Gospodarczy - Krajowego Rejestru Sądowego,
              </span>
              <br></br>
              <span>KRS 0000775753,</span>
              <br></br>
              <span>NIP 5242882561,</span>
              <br></br>
              <span>REGON 382807991,5PX</span>
              <br></br>
              <span>Kapitał zakładowy 5.000,00 zł</span>
              <br></br>
            </span>
          </div>
        </div>
        <div className="iseno-home-footer-offices-wrapper">
          <p className="iseno-home-text91">Offices</p>
          <div className="iseno-home-container09">
            <Component5></Component5>
            <Component5 text="Spain" text1="Valencia"></Component5>
            <Component5 text="Poland" text1="Warsaw"></Component5>
            <Component5 text="Cyprus" text1="Larnaca"></Component5>
          </div>
        </div>
        <span className="iseno-home-text92">
          <span>Important: We use cookies.</span>
          <br></br>
          <span>
            We use information saved using cookies and similar technologies,
            including for advertising and statistical purposes and to adapt our
            services to the individual needs of users.
          </span>
        </span>
        <div className="iseno-home-container10">
          <span className="iseno-home-text96">
            Copyright © 2022 . All Rights Reserved
          </span>
          <span className="iseno-home-text97"> Privacy policy</span>
        </div>
      </section>
    </div>
  )
}

export default IsenoHome
