import React from "react";
import courseimage from "../assets/bg/academy.jpg";
import { NavLink } from "react-router-dom";

export default function CourseDetails() {
  return (
    <div>
      <section className="page_banner">
        <div className="container largeContainer">
          <div className="row">
            <div className="col-md-6">
              <h2 className="banner-title">Courses</h2>
            </div>
            <div className="col-md-6 text-right">
              <p className="breadcrumbs">
                <NavLink to="/" className="anchor">
                  <i className="twi-home-alt1"></i>Home
                </NavLink>
                <span>/</span>Courses
              </p>
            </div>
          </div>
        </div>
      </section>
      <section class="singleBlog">
        <div class="container largeContainer">
          <div class="row">
            <div class="col-lg-8">
              <div class="sic_details clearfix">
                <div class="postThumb">
                  <img src={courseimage} alt />
                </div>
                <div class="bmeta"></div>
                <div class="sic_the_content clearfix">
                  <p>
                    Introducing our comprehensive 10-week trading course
                    designed to take you from novice to confident trader. In
                    this program, we’ll dive into the world of financial
                    markets, covering various market types and their functions.
                    You’ll gain a deep understanding of advanced technical and
                    fundamental analysis techniques, crucial for informed
                    decision-making. We’ll also explore risk and money
                    management, ensuring your capital is protected and
                    maximized. Learn about popular trading platforms and
                    strategies that suit your style. Our hands-on approach
                    includes demo trading on live markets, enabling you to apply
                    your knowledge in real-time. Join us for three hours per
                    week and embark on your journey to trading success.
                  </p>
                  <h2>Advanced Course</h2>
                  <ul>
                    <li>Introduction of markets</li>
                    <li>Type of markets and how markets works</li>
                    <li>
                      Analysis (advance technical and advance fundamental)
                    </li>
                    <li>Risk management</li>
                    <li>Money management</li>
                    <li>Trading platforms</li>
                    <li>Strategies of trading</li>
                    <li>Demo trading or practice on live market</li>
                    <li>
                      DFull fledged course that covers all areas till end result
                    </li>
                    <li>
                      Duration of 10 weeks or till you got your desired results
                    </li>
                    <li>Three hours per week</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
