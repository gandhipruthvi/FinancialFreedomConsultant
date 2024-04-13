import "../Styles/Home.scss";
import ServicesImg1 from "../assets/our services/s1.jpg";
import ServicesImg2 from "../assets/our services/s2.jpg";
import ServicesImg3 from "../assets/our services/s3.jpg";

function Home() {
  return (
    <div className="Home">

      {/* Banner Carousel */}
      <section className="banner">
        {/* <div className="banner-content">
          <h1>Bright Solutions, Profitable Results.</h1>
          <p>
            Keeping track of the finances is fundamental to the success of every
            business, small or large, but tackling task yourself can be
            intimidating.
          </p>
          <button className="services-button">Our Services</button>
        </div> */}
      </section>

      {/* Book Now Section */}
      <section className="bookNowSection">
        <div className="body-text-content">
          <p className="body-description">
            Welcome to <b>Financial Freedom Consultant</b>, where our commitment lies
            in assisting clients in attaining their financial aspirations.
          </p>
        </div>

        <div className="body-text-content">
          <p className="body-description">
            Ready for financial freedom? Let us guide you at Financial Freedom
            Consultants.
          </p>
        </div>

        <div className="body-btn">
          <a href="contact.html" className=" priceItem qu_btn">
            Book Now
          </a>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="serviceSection">
        <div className="marqueeText runRight stokeText">
          <h2>Financial Freedom Consultant.</h2>
        </div><br />
        <div className="container largeContainer">
          <div className="row">
            <div className="col-xl-6">
              <div className="boxService">
                <h2 className="secTitle">We Make Your Agency <span>Full Bright</span></h2>
                <p>This Cheat Sheet offers tips and advice to help you get the essentials right. here’s a list
                  of the most important tasks of business accounting and their meaning.</p>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="icon_box_01">
                <div className="ibMeta">
                  <span>01</span>
                  <i className="icons-monitoring"></i>
                  <div className="brleft"></div>
                  <div className="brright"></div>
                </div>
                <h3><a href="single-service.html">Market Research</a></h3>
                <p>A typical business holds many different assets called capital, including office...</p>
                {/* <a className="sm" href="single-service.html">Read More<i className="twi-arrow-right1"></i></a> */}
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="icon_box_01">
                <div className="ibMeta">
                  <span>02</span>
                  <i className="icon-local_3-1"></i>
                  <div className="brleft"></div>
                  <div className="brright"></div>
                </div>
                <h3><a href="single-service.html">Startup Business</a></h3>
                <p>A typical business holds many different assets called capital, including office...</p>
                {/* <a className="sm" href="single-service.html">Read More<i className="twi-arrow-right1"></i></a> */}
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="icon_box_01">
                <div className="ibMeta">
                  <span>03</span>
                  <i className="icon-local_1"></i>
                  <div className="brleft"></div>
                  <div className="brright"></div>
                </div>
                <h3><a href="single-service.html">Business Growth</a></h3>
                <p>A typical business holds many different assets called capital, including office...</p>
                {/* <a className="sm" href="single-service.html">Read More<i className="twi-arrow-right1"></i></a> */}
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="icon_box_01">
                <div className="ibMeta">
                  <span>04</span>
                  <i className="icon-local_11"></i>
                  <div className="brleft"></div>
                  <div className="brright"></div>
                </div>
                <h3><a href="single-service.html">Insurance Task</a></h3>
                <p>A typical business holds many different assets called capital, including office...</p>
                {/* <a className="sm" href="single-service.html">Read More<i className="twi-arrow-right1"></i></a> */}
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="icon_box_01">
                <div className="ibMeta">
                  <span>05</span>
                  <i className="icon-Wemseu01"></i>
                  <div className="brleft"></div>
                  <div className="brright"></div>
                </div>
                <h3><a href="single-service.html">Consultancy</a></h3>
                <p>A typical business holds many different assets called capital, including office...</p>
                {/* <a className="sm" href="single-service.html">Read More<i className="twi-arrow-right1"></i></a> */}
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="icon_box_01">
                <div className="ibMeta">
                  <span>06</span>
                  <i className="icon-local_1-1"></i>
                  <div className="brleft"></div>
                  <div className="brright"></div>
                </div>
                <h3><a href="single-service.html">Financial Advices</a></h3>
                <p>A typical business holds many different assets called capital, including office...</p>
                {/* <a className="sm" href="single-service.html">Read More<i className="twi-arrow-right1"></i></a> */}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 text-center">
              <p className="qu_link">You can also find our <a href="contact.html">Consultant Service to contact for
                the consulting</a></p>
            </div>
          </div>
        </div>

        <div className="marqueeText btMr runLeft">
          <h2>Financial Freedom Consultant.</h2>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="processSection01">
        <div className="container largeContainer">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="subTitle"><span class="bleft"></span>Process<span class="bright"></span></div>
              <h2 className="secTitle">How We <span>Work</span></h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 text-center">
              <div className="icon_box_03">
                <div className="ib_box"><i class="icon-local_1"></i><span>01</span></div>
                <h3>Improvement</h3>
                <p>Fessionally fabricate strategic platform without corporate before fully tested</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="icon_box_03">
                <div className="ib_box"><i class=" icon-local_3"></i><span>02</span></div>
                <h3>Idea Create</h3>
                <p>Fessionally fabricate strategic platform without corporate before fully tested</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="icon_box_03">
                <div className="ib_box"><i class="icon-local_9"></i><span>03</span></div>
                <h3>Consultancy</h3>
                <p>Fessionally fabricate strategic platform without corporate before fully tested</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="icon_box_03">
                <div className="ib_box"><i class="icon-local_7"></i><span>04</span></div>
                <h3>Success</h3>
                <p>Fessionally fabricate strategic platform without corporate before fully tested</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <div className="container-xxl py-5">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-5 wow fadeIn" data-wow-delay="0.1s">
              <div className="btn btn-sm border rounded-pill text-primary px-3 mb-3">Testimonial</div>
              <h1 className="mb-4">What Our Clients Say!</h1>
              <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam
                amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus
                clita duo justo et tempor eirmod magna dolore erat amet</p>
              {/* <a class="btn btn-primary rounded-pill px-4" href="#">Read More</a> */}
            </div>
            <div className="col-lg-7 wow fadeIn" data-wow-delay="0.5s">
              <div className="owl-carousel testimonial-carousel border-start border-primary">
                <div className="testimonial-item ps-5">
                  <i className="fa fa-quote-left fa-2x text-primary mb-3"></i>
                  <p className="fs-4">Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore erat amet</p>
                  <div className="d-flex align-items-center">
                    {/* <img class="img-fluid flex-shrink-0 rounded-circle" src="img/testimonial-1.jpg"
                                    style="width: 60px; height: 60px;"> */}
                    <div className="ps-3">
                      <h5 className="mb-1">Client Name</h5>
                      <span>Profession</span>
                    </div>
                  </div>
                </div>
                <div className="testimonial-item ps-5">
                  <i className="fa fa-quote-left fa-2x text-primary mb-3"></i>
                  <p className="fs-4">Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore erat amet</p>
                  <div className="d-flex align-items-center">
                    {/* <img class="img-fluid flex-shrink-0 rounded-circle" src="img/testimonial-2.jpg"
                                    style="width: 60px; height: 60px;"> */}
                    <div className="ps-3">
                      <h5 className="mb-1">Client Name</h5>
                      <span>Profession</span>
                    </div>
                  </div>
                </div>
                <div className="testimonial-item ps-5">
                  <i className="fa fa-quote-left fa-2x text-primary mb-3"></i>
                  <p className="fs-4">Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore erat amet</p>
                  <div className="d-flex align-items-center">
                    {/* <img class="img-fluid flex-shrink-0 rounded-circle" src="img/testimonial-3.jpg"
                                    style="width: 60px; height: 60px;"> */}
                    <div className="ps-3">
                      <h5 className="mb-1">Client Name</h5>
                      <span>Profession</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
