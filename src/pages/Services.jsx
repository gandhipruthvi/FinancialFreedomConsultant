import "../Styles/Services.scss";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import image1 from '../assets/bg/t1.jpg';
import image2 from '../assets/bg/s2.jpg';
import image3 from '../assets/bg/1.jpg';
import image4 from '../assets/bg/service1.jpg';
import logo from "../assets/logo.png";

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

      <section class="aboutSection01">
        <div class="container largeContainer">
          <div class="row">
            <div class="col-lg-11">
              <div class="subTitle"><span class="bleft"></span>Empower Your Financial Future Today!
              </div>
              <h2 class="secTitle">We provide some of the <span>best services to you</span></h2>
              <p class="secDesc">
                Are you ready to take control of your finances and chart a course towards long-term prosperity?
                Our comprehensive financial assessment service is designed to do just that, offering you a clear
                pathway to achieving your financial dreams.
              </p>
              <div class="row">
                <div class="col-xl-6 col-md-6">
                  <div class="icon_box_02">
                    <div class="ib_box"><i class="icons-target"></i></div>
                    <h3>Goal Setting</h3>
                    <p>We help you define clear, achievable financial objectives.</p>
                  </div>
                  <div class="icon_box_02">
                    <div class="ib_box"><i class="icon-local_1-1"></i></div>
                    <h3>Financial Planning</h3>
                    <p>Together, we’ll create a roadmap tailored to your unique financial situation</p>
                  </div>
                  <div class="icon_box_02">
                    <div class="ib_box"><i class="icon-local_11"></i></div>
                    <h3>Expense Control</h3>
                    <p>Unlock the secrets to spending and maximize your savings potential.</p>
                  </div>
                </div>
                <div class="col-xl-6 col-md-6">
                  <div class="icon_box_02">
                    <div class="ib_box"><i class="icon-local_1"></i></div>
                    <h3>Boost Savings</h3>
                    <p>Discover strategies to boost your savings like never before.</p>
                  </div>
                  <div class="icon_box_02">
                    <div class="ib_box"><i class="icon-Wemseu01"></i></div>
                    <h3>Investment Advice</h3>
                    <p>Gain insights into lucrative investment options and understand the magic of compounding. </p>
                  </div>
                  <div class="icon_box_02">
                    <div class="ib_box"><i class="icon-local_3-1"></i></div>
                    <h3>Economic Insights</h3>
                    <p>Learn how Central Banks, interest rates, and inflation influence your finances, guiding confident decision-making. </p>
                  </div>
                </div>
              </div>
            </div>
            {/* <div class="col-lg-4">
              <div class="abthumb">
                <img src="assets/images/home1/1.png" alt />
              </div>
            </div> */}
          </div>
        </div>
      </section>

      <section class="serviceSection03">
        <div class="container largeContainer">
          <div class="row">
            <div class="col-lg-12 text-center">
              <div class="subTitle"><span class="bleft"></span>Our Services<span class="bright"></span></div>
              <h2 class="secTitle">Financial Empowerment Solutions</h2>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4 col-md-6">
              <div class="icon_box_09 text-center">
                <h2>01</h2>
                <div class="ib_box"><i class=" icon-local_1"></i></div>
                <div class="srThumb"><img src={image1} height={260} width={307} alt /></div>
                <h3><a href="single-service.html">Portfolio Management</a></h3>
                <p>Optimizes investments for your goals through personalized strategies and expert monitoring, maximizing returns while managing risk effectively.</p><br />
                <a class="qu_btn" href="contact.html">Book Now</a>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="icon_box_09 text-center">
                <h2>02</h2>
                <div class="ib_box"><i class="icon-local_3-1"></i></div>
                <div class="srThumb"><img src={image2} alt /></div>
                <h3><a href="single-service.html">Career Counselling</a></h3>
                <p>Get personalized career guidance to reach your professional goals with our counseling service. Unlock your potential with expert support.</p><br />
                <a class="qu_btn" href="contact.html">Book Now</a>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="icon_box_09 text-center">
                <h2>03</h2>
                <div class="ib_box"><i class="icon-local_1-1"></i></div>
                <div class="srThumb"><img src={image3} height={260} width={307} alt /></div>
                <h3><a href="single-service.html">Financial Advice</a></h3>
                <p>Gain tailored financial advice to suit your needs. From investments to retirement planning, we'll help you secure your financial future.</p><br />
                <a class="qu_btn" href="contact.html">Book Now</a>
              </div>
            </div>
          </div>
          <div class="row bottomspace">
            <div class="col-md-12 text-center">
              <p class="secDesc">We help take your small business to the next level. Don’t hesitate to contact us.
              </p>
              <h4>30 Minutes Free Consultation</h4>
              <div class="clearfix"></div>
              <a class="qu_btn" href="contact.html">Send Request</a>
            </div>
          </div>
        </div>
      </section>

      <section class="processSection02">
        <div class="container largeContainer">
          <div class="row">
            <div class="col-xl-6">
              <div class="wpProcess">
                <img src={image4} alt />
                <div class="IconImage"><img src={logo} width={78} height={75} alt /></div>
              </div>
            </div>
            <div class="col-xl-6">
              <div class="worCon">
                <div class="subTitle"><span class="bleft"></span>Working Process</div>
                <h2 class="secTitle">How Does We Works</h2>
                <p class="secDesc">
                  A typical business holds many different assets called capital, including office furniture
                  and equipment, retail display cabinets.
                </p>
                <div class="icon_box_08">
                  <div class="ib_box"><i class="icon-gGaLLZ01"></i><span>01</span></div>
                  <h3>Have A Coffee</h3>
                  <p>In addition to payroll cheques, a business writes many other cheques during the course of
                    a year to pay...</p>
                </div>
                <div class="icon_box_08">
                  <div class="ib_box"><i class="icon-local_7-1"></i><span>02</span></div>
                  <h3>Meet With Advisor</h3>
                  <p>In addition to payroll cheques, a business writes many other cheques during the course of
                    a year to pay...</p>
                </div>
                <div class="icon_box_08">
                  <div class="ib_box"><i class="icons-analytics"></i><span>03</span></div>
                  <h3>Achieve Your Goals</h3>
                  <p>In addition to payroll cheques, a business writes many other cheques during the course of
                    a year to pay...</p>
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
