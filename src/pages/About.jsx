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
    <div className="about-section">
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

      <section className="aboutSection">
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
                <h2 className="secTitle">Build Your Business With Right Way</h2>
                <p className="secDesc">
                  Accounting departments are usually responsible for keeping
                  track of all purchase orders that have been placed for stock
                  (products to be sold by the business) and all other assets and
                  services.
                </p>
                <div className="hpAuthor">
                  <img className="author" src={SymbolImg} alt="symbol" />
                  <p>Need help? Contact Us</p>
                  <h3>(625)-1251-6677</h3>
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
                <p>A typical business holds many different...</p>
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
                <p>A typical business holds many different...</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="chooseSection abcs01">
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
                    Best Sources of Help and Advice for Your Business
                  </Accordion.Header>
                  <Accordion.Body className="collapse show card-body">
                    You’re not on your own when setting up or running a business
                    in the UK offier a wealth of information and expertise if
                    you need help from filling in your tax forms to recruiting
                    people or setting up your business
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1" className="card">
                  <Accordion.Header className="card-header">
                    <span></span>
                    Small business service with offices in most big towns
                  </Accordion.Header>
                  <Accordion.Body className="collapse show card-body">
                    You’re not on your own when setting up or running a business
                    in the UK offier a wealth of information and expertise if
                    you need help from filling in your tax forms to recruiting
                    people or setting up your business
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2" className="card">
                  <Accordion.Header className="card-header">
                    <span></span>
                    Offices are helpful on recruitment and employing people
                  </Accordion.Header>
                  <Accordion.Body className="collapse show card-body">
                    You’re not on your own when setting up or running a business
                    in the UK offier a wealth of information and expertise if
                    you need help from filling in your tax forms to recruiting
                    people or setting up your business
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3" className="card">
                  <Accordion.Header className="card-header">
                    <span></span>
                    Services including a legal helpline with disabilities
                  </Accordion.Header>
                  <Accordion.Body className="collapse show card-body">
                    You’re not on your own when setting up or running a business
                    in the UK offier a wealth of information and expertise if
                    you need help from filling in your tax forms to recruiting
                    people or setting up your business
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
                  <p>
                    Where spotless cleaning comes to your door, No One Can Do
                    This
                  </p>
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
