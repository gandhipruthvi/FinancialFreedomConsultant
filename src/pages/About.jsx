import "../Styles/About.scss";
import { NavLink } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import SymbolImg from "../assets/about/symbol.png";
import AboutImg from "../assets/about/about.png";
import VideoImg from "../assets/about/video.jpg";
import WhyChooseUsImg from "../assets/about/whychooseus.png";
import Symbol2Img from "../assets/about/symbol2.png";

const About = () => {
  return (
    <div className="about">
      <section className="page_banner">
        <div className="container largeContainer">
          <div className="row">
            <div className="col-md-6">
              <h2 className="banner-title">About Us</h2>
            </div>
            <div className="col-md-6 text-right">
              <p className="breadcrumbs">
                <NavLink to="/" className="anchor">
                  <i className="twi-home-alt1"></i>Home
                </NavLink>
                <span>/</span>About Us
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="welcomeSection">
        <div className="container largeContainer">
          <div className="row">
            <div className="col-lg-6">
              <div className="absThumb">
                <img src={AboutImg} alt="about-image" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="abpd">
                <div className="subTitle">
                  <span className="bleft"></span>Welcome To Our Company
                </div>
                <h2 className="secTitle">
                  Empowering Individuals & Businesses
                </h2>
                <p className="secDesc">
                  At <b>Financial Freedom Consultant</b>, we empower both
                  individuals and businesses with expert financial guidance. Our
                  tailored services help you take control of your financial
                  future. Reach out today to unlock new opportunities for
                  success.
                </p>
                <div className="hpAuthor">
                  <img className="author" src={SymbolImg} alt="symbol" />
                  <p>Need help? Contact Us</p>
                  <h3>+971-50-984-1318</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="videoFact bg_fef4f4">
        <div className="container largeContainer">
          <div className="row">
            <div className="col-xl-6">
              <div className="video_banner">
                <img src={VideoImg} alt="video" />
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="fact_02">
                <h5>Projects With 100% Satisfaction</h5>
                <h2>
                  <span className="counter" data-count="2500">
                    2.5
                  </span>
                  <i>k</i>
                </h2>
                <p>
                  Tailored financial guidance for individuals and businesses,
                  ensuring success and peace of mind.
                </p>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="fact_02">
                <h5>Experienced & Professional Team</h5>
                <h2>
                  <span className="counter" data-count="145">
                    145
                  </span>
                </h2>
                <p>
                  Dedicated to your financial success, our team brings extensive
                  experience and professionalism.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="chooseSection">
        <div className="container largeContainer">
          <div className="row">
            <div className="col-xl-6 pdAcc">
              <div className="subTitle">
                <span className="bleft"></span>Why Choose Us
              </div>
              <h2 className="secTitle">Get Every Answer</h2>
              <Accordion className="quAccordion">
                <Accordion.Item eventKey="0" className="card">
                  <Accordion.Header className="card-header">
                    <span></span>
                    <p className="accordianTitle">
                      Empowerment Through Education
                    </p>
                  </Accordion.Header>
                  <Accordion.Body className="collapse show card-body">
                    We believe in empowering our clients with financial
                    knowledge and understanding.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1" className="card">
                  <Accordion.Header className="card-header">
                    <span></span>
                    <p className="accordianTitle">Holistic Approach</p>
                  </Accordion.Header>
                  <Accordion.Body className="collapse show card-body">
                    Our approach to financial planning goes beyond mere numbers.
                    We take into account your values, aspirations, and lifestyle
                    to create a comprehensive strategy that fosters long-term
                    financial freedom and fulfillment.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2" className="card">
                  <Accordion.Header className="card-header">
                    <span></span>
                    <p className="accordianTitle">Proactive Risk Management</p>
                  </Accordion.Header>
                  <Accordion.Body className="collapse show card-body">
                    We help you identify and mitigate potential risks that could
                    jeopardize your financial freedom, offering proactive
                    strategies to protect your assets and ensure stability in
                    any economic climate.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3" className="card">
                  <Accordion.Header className="card-header">
                    <span></span>
                    <p className="accordianTitle">
                      Continuous Support and Guidance
                    </p>
                  </Accordion.Header>
                  <Accordion.Body className="collapse show card-body">
                    Achieving financial freedom is an ongoing journey, and we're
                    with you every step of the way. From initial planning to
                    ongoing monitoring and adjustments, we provide continuous
                    support and guidance to help you stay on track towards your
                    goals.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div className="col-xl-6">
              <div className="chImage">
                <img src={WhyChooseUsImg} alt="why choose us image" />
              </div>
              <div className="chooseSlider">
                <div className="chsItem">
                  <img src={Symbol2Img} alt="symbol 2" />
                  <p>Securing Your Financial Future, Together.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
