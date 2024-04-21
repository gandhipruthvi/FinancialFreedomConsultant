import "../Styles/About.scss";
import { NavLink } from "react-router-dom";

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
                <span>/</span>About Us One
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="aboutSection04">
        <div className="container largeContainer">
          <div className="row">
            <div className="col-lg-6">
              <div className="absThumb">
                <img src="../assets/about/1.png" alt="about-image" />
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
                  <img
                    className="author"
                    src="../assets/about/symbol.png"
                    alt="symbol"
                  />
                  <p>Need help? Contact Us</p>
                  <h3>(625)-1251-6677</h3>
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
