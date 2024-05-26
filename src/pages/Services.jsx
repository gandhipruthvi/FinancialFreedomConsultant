import "../Styles/Services.scss";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import image1 from '../assets/bg/t1.jpg';
import image2 from '../assets/bg/s2.jpg';
import image3 from '../assets/bg/1.jpg';
import image4 from '../assets/bg/service1.jpg';
import image5 from '../assets/bg/7.png';
import image6 from '../assets/bg/academy.jpg';
import logo from "../assets/logo.png";

const rowStyle = {
  marginLeft: '16%'
};

function Services() {
  return (
    <div className="services">
      <section className="page_banner">
        <div className="container largeContainer">
          <div className="row">
            <div className="col-md-6">
              <h2 className="banner-title">Services</h2>
            </div>
            <div className="col-md-6 text-right">
              <p className="breadcrumbs">
                <NavLink to="/" className="anchor">
                  <i className="twi-home-alt1"></i>Home
                </NavLink>
                <span>/</span>Services
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="aboutSection01">
        <div className="container largeContainer">
          <div className="row">
            <div className="col-lg-11">
              <div className="subTitle"><span className="bleft"></span>Empower Your Financial Future Today!
              </div>
              <h2 className="secTitle">We provide some of the <span>best services to you</span></h2>
              <p className="secDesc">
                Are you ready to take control of your finances and chart a course towards long-term prosperity?
                Our comprehensive financial assessment service is designed to do just that, offering you a clear
                pathway to achieving your financial dreams.
              </p>
              <div className="row">
                <div className="col-xl-6 col-md-6">
                  <div className="icon_box_02">
                    <div className="ib_box"><i className="icons-target"></i></div>
                    <h3>Goal Setting</h3>
                    <p>We help you define clear, achievable financial objectives.</p>
                  </div>
                  <div className="icon_box_02">
                    <div className="ib_box"><i className="icon-local_1-1"></i></div>
                    <h3>Financial Planning</h3>
                    <p>Together, we’ll create a roadmap tailored to your unique financial situation</p>
                  </div>
                  <div className="icon_box_02">
                    <div className="ib_box"><i className="icon-local_11"></i></div>
                    <h3>Expense Control</h3>
                    <p>Unlock the secrets to spending and maximize your savings potential.</p>
                  </div>
                </div>
                <div className="col-xl-6 col-md-6">
                  <div className="icon_box_02">
                    <div className="ib_box"><i className="icon-local_1"></i></div>
                    <h3>Boost Savings</h3>
                    <p>Discover strategies to boost your savings like never before.</p>
                  </div>
                  <div className="icon_box_02">
                    <div className="ib_box"><i className="icon-Wemseu01"></i></div>
                    <h3>Investment Advice</h3>
                    <p>Gain insights into lucrative investment options and understand the magic of compounding. </p>
                  </div>
                  <div className="icon_box_02">
                    <div className="ib_box"><i className="icon-local_3-1"></i></div>
                    <h3>Economic Insights</h3>
                    <p>Learn how Central Banks, interest rates, and inflation influence your finances, guiding confident decision-making. </p>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="col-lg-4">
              <div className="abthumb">
                <img src="assets/images/home1/1.png" alt />
              </div>
            </div> */}
          </div>
        </div>
      </section>

      <section className="serviceSection03">
        <div className="container largeContainer">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="subTitle"><span className="bleft"></span>Our Services<span className="bright"></span></div>
              <h2 className="secTitle">Financial Empowerment Solutions</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="icon_box_09 text-center">
                <h2>01</h2>
                <div className="ib_box"><i className=" icon-local_1"></i></div>
                <div className="srThumb"><img src={image5} height={260} width={307} alt /></div>
                <h3><a >Wealth Path Advisory</a></h3>
                <p>Personalized financial guidance to achieve your wealth goals. Our advisors tailor investment strategies and plans to your unique needs.</p><br />
                <a className="qu_btn" href="contact">Book Now</a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="icon_box_09 text-center">
                <h2>02</h2>
                <div className="ib_box"><i className="icon-local_3-1"></i></div>
                <div className="srThumb"><img src={image6} height={260} width={307} alt /></div>
                <h3><a>Fin Market Academy</a></h3>
                <p>Comprehensive financial education and training to empower individuals with the knowledge and skills needed to navigate markets successfully.</p><br />
                <a className="qu_btn" href="contact">Book Now</a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="icon_box_09 text-center">
                <h2>03</h2>
                <div className="ib_box"><i className=" icon-local_1"></i></div>
                <div className="srThumb"><img src={image1} height={260} width={307} alt /></div>
                <h3><a>Portfolio Management</a></h3>
                <p>Optimizes investments for your goals through personalized strategies and expert monitoring, maximizing returns while managing risk effectively.</p><br />
                <a className="qu_btn" href="contact">Book Now</a>
              </div>
            </div>

          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6" style={rowStyle}>
              <div className="icon_box_09 text-center">
                <h2>04</h2>
                <div className="ib_box"><i className="icon-local_3-1"></i></div>
                <div className="srThumb"><img src={image2} alt /></div>
                <h3><a>Career Counselling</a></h3>
                <p>Get personalized career guidance to reach your professional goals with our counseling service. Unlock your potential with expert support.</p><br />
                <a className="qu_btn" href="contact">Book Now</a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="icon_box_09 text-center">
                <h2>05</h2>
                <div className="ib_box"><i className="icon-local_1-1"></i></div>
                <div className="srThumb"><img src={image3} height={260} width={307} alt /></div>
                <h3><a>Financial Advice</a></h3>
                <p>Gain tailored financial advice to suit your needs. From investments to retirement planning, we'll help you secure your financial future.</p><br />
                <a className="qu_btn" href="contact">Book Now</a>
              </div>
            </div>

          </div>
          <div className="row bottomspace">
            <div className="col-md-12 text-center">
              <p className="secDesc">We help take your small business to the next level. Don’t hesitate to contact us.
              </p>
              <h4>30 Minutes Free Consultation</h4>
              <div className="clearfix"></div>
              <a className="qu_btn" href="contact">Send Request</a>
            </div>
          </div>
        </div>
      </section>

      <section className="processSection02">
        <div className="container largeContainer">
          <div className="row">
            <div className="col-xl-6">
              <div className="wpProcess">
                <img src={image4} alt />
                <div className="IconImage"><img src={logo} width={78} height={75} alt /></div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="worCon">
                <div className="subTitle"><span className="bleft"></span>Working Process</div>
                <h2 className="secTitle">How Does We Works</h2>
                <p className="secDesc">
                  We start by understanding your financial goals, create personalized strategies,
                  and guide you every step of the way towards achieving financial freedom.
                </p>
                <div className="icon_box_08">
                  <div className="ib_box"><i className="icon-gGaLLZ01"></i><span>01</span></div>
                  <h3>Have A Coffee</h3>
                  <p>Make yourself comfortable and discuss your goals over a warm cup.</p>
                </div>
                <div className="icon_box_08">
                  <div className="ib_box"><i className="icon-local_7-1"></i><span>02</span></div>
                  <h3>Meet With Advisor</h3>
                  <p>Begin your journey to financial empowerment with personalized guidance from our expert team.</p>
                </div>
                <div className="icon_box_08">
                  <div className="ib_box"><i className="icons-analytics"></i><span>03</span></div>
                  <h3>Achieve Your Goals</h3>
                  <p> We're here to turn your aspirations into achievements through customized strategies and expert support.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
