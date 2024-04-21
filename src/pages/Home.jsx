import { useEffect, useState } from "react";
import "../Styles/Home.scss";
// import ServicesImg1 from "../assets/our services/s1.jpg";
// import ServicesImg2 from "../assets/our services/s2.jpg";
// import ServicesImg3 from "../assets/our services/s3.jpg";

const easeOutQuad = (t) => t * (2 - t);
const frameDuration = 1000 / 60;

const CountUpAnimation = ({ children, duration = 3000 }) => {
  const countTo = parseInt(children, 10);
  const [count, setCount] = useState(0);

  useEffect(() => {
    let frame = 0;
    const totalFrames = Math.round(duration / frameDuration);
    const counter = setInterval(() => {
      frame++;
      const progress = easeOutQuad(frame / totalFrames);
      setCount(countTo * progress);

      if (frame === totalFrames) {
        clearInterval(counter);
      }
    }, frameDuration);
  }, []);

  return Math.floor(count);
};

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
            Welcome to <b>Financial Freedom Consultant</b>, where our commitment
            lies in assisting clients in attaining their financial aspirations.
          </p>
          <p className="body-description">
            Ready for financial freedom? Let us guide you at Financial Freedom
            Consultants.
          </p>
        </div>

        <div className="body-text-content">
          <h2>Career Counseling</h2>
          <p className="heading-body-description">
            At Financial Freedom Consultant, our career counseling service paves
            the way for a prosperous financial profession. Whether you're
            beginning your journey or aiming for advancement, count on us for
            unwavering support at every stage.
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
        </div>
        <br />
        <br />
        <div className="container largeContainer">
          <div className="row">
            <div className="col-xl-6">
              <div className="boxService">
                <h2 className="secTitle">
                  We Make Your Agency <span>Full Bright</span>
                </h2>
                <p>
                  Unlock agency potential with comprehensive services, from
                  strategy to execution. Maximize brand impact with
                  comprehensive illumination.
                </p>
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
                <h3>
                  <a href="single-service.html">Market Research</a>
                </h3>
                <p>
                  Gain strategic insights and stay ahead in dynamic markets with
                  our expert analysis.
                </p>
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
                <h3>
                  <a href="single-service.html">Startup Business</a>
                </h3>
                <p>
                  Empowering startups with tailored solutions for growth and
                  success in competitive landscape.
                </p>
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
                <h3>
                  <a href="single-service.html">Business Growth</a>
                </h3>
                <p>
                  Fostering business expansion through customized strategic
                  solutions
                </p>
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
                <h3>
                  <a href="single-service.html">Insurance Task</a>
                </h3>
                <p>
                  Efficiently manage insurance-related tasks with our
                  specialized expertise and support.
                </p>
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
                <h3>
                  <a href="single-service.html">Consultancy</a>
                </h3>
                <p>
                  Expert guidance tailored to your needs for informed
                  decision-making and success.
                </p>
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
                <h3>
                  <a href="single-service.html">Financial Advices</a>
                </h3>
                <p>
                  Personalized guidance for secure financial futures tailored to
                  your goals and circumstances.
                </p>
                {/* <a className="sm" href="single-service.html">Read More<i className="twi-arrow-right1"></i></a> */}
              </div>
            </div>
          </div>
        </div>
        <br />

        <div className="marqueeText btMr runLeft">
          <h2>Financial Freedom Consultant.</h2>
        </div>
      </section>

      {/* Numbers Section */}
      <section className="numberSection">
        <div className="funfactArea">
          <div className="fact_01">
            <h2>
              <span className="counter" data-count="2500">
                <CountUpAnimation>2500</CountUpAnimation>
              </span>
              <i>k</i>
            </h2>
            <p>
              Power of choices when nothing what
              <br />
              we like best principle
            </p>
          </div>
          <div className="fact_01">
            <h2>
              <span className="counter" data-count="138">
                <CountUpAnimation>138</CountUpAnimation>
              </span>
              <i>+</i>
            </h2>
            <p>
              Experiend Professuinal Team obtain
              <br />
              some of good advantages
            </p>
          </div>
          <div className="fact_01">
            <h2>
              <span className="counter" data-count="9800">
                <CountUpAnimation>9.8</CountUpAnimation>
              </span>
              <i>%</i>
            </h2>
            <p>
              Revenue complete of the system and
              <br />
              expound actual teaching
            </p>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="processSection">
        <div className="container largeContainer">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="subTitle">
                <span className="bleft"></span>Process
                <span className="bright"></span>
              </div>
              <h2 className="secTitle">
                How We <span>Work</span>
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 text-center">
              <div className="icon_box_03">
                <div className="ib_box">
                  <i className="icon-local_1"></i>
                  <span>01</span>
                </div>
                <h3>Improvement</h3>
                <p>
                  Continuous enhancement through data-driven insights and client
                  collaboration for optimal results.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="icon_box_03">
                <div className="ib_box">
                  <i className=" icon-local_3"></i>
                  <span>02</span>
                </div>
                <h3>Idea Create</h3>
                <p>
                  Inspiring innovation through collaborative brainstorming and
                  creative exploration.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="icon_box_03">
                <div className="ib_box">
                  <i className="icon-local_9"></i>
                  <span>03</span>
                </div>
                <h3>Consultancy</h3>
                <p>
                  Tailored guidance and expertise for navigating complex
                  challenges and seizing opportunities.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="icon_box_03">
                <div className="ib_box">
                  <i className="icon-local_7"></i>
                  <span>04</span>
                </div>
                <h3>Success</h3>
                <p>
                  Partnering with you to define, pursue, and achieve your vision
                  of success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="whyChooseUsSection">
        <div className="container largeContainer">
          <div className="row">
            <div className="col-xl-5">
              <div className="subTitle">
                <span className="bleft"></span>Why Choose Us
              </div>
              <h2 className="secTitle white">Find Out More Our Features</h2>
              <p className="secDesc">
                In addition to payroll cheques, a business writes many other
                cheques during the course of a year to pay for a wide variety of
                items including local business taxes,
              </p>
            </div>
            <div className="col-xl-7 mt8">
              <div className="row">
                <div className="col-md-6">
                  <div className="icon_box_05">
                    <div className="ib_box">
                      <div className="pin1"></div>
                      <i className="icon-local_1"></i>
                      <div className="pin2"></div>
                    </div>
                    <h3>Expertise</h3>
                    <p>
                      Access to seasoned financial advisors with extensive
                      industry knowledge and proven track records.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="icon_box_05">
                    <div className="ib_box">
                      <div className="pin1"></div>
                      <i className="icon-local_3"></i>
                      <div className="pin2"></div>
                    </div>
                    <h3>Transparency</h3>
                    <p>
                      We prioritize clear communication and transparency,
                      empowering confident financial decisions.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="icon_box_05">
                    <div className="ib_box">
                      <div className="pin1"></div>
                      <i className="icon-XjxC7N01"></i>
                      <div className="pin2"></div>
                    </div>
                    <h3>Client-Centric</h3>
                    <p>
                      Dedication to understanding your unique financial needs
                      and providing personalized guidance.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="icon_box_05">
                    <div className="ib_box">
                      <div className="pin1"></div>
                      <i className="icon-local_11"></i>
                      <div className="pin2"></div>
                    </div>
                    <h3>Proven Results</h3>
                    <p>
                      Demonstrated success in helping clients achieve financial
                      stability, growth, and prosperity.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section Small Growing business part*/}
      <section className="whyChooseUsSection2">
        <div className="container largeContainer">
          <div className="row">
            <div className="col-lg-12">
              <div className="cta">
                <div className="row">
                  <div className="col-lg-5">
                    <div className="icon_box_06">
                      <div className="ib_box">
                        <i className="icon-local_7"></i>
                      </div>
                      <h3>Small / Growing Business!</h3>
                      <p>
                        Discover how we empower small and growing businesses to
                        thrive in competitive markets.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-2 text-center">
                    <div className="orcta">
                      <p>or</p>
                    </div>
                  </div>
                  <div className="col-lg-5 text-right">
                    <div className="icon_box_06">
                      <div className="ib_box">
                        <i className="icons-target"></i>
                      </div>
                      <h3>Enterprise Level Organization</h3>
                      <p>
                        Learn how large enterprises use our services to
                        streamline operations and achieve goals.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment Section */}
      <section className="appoinmentSection02">
        <div className="container largeContainer">
          <div className="row">
            <div className="col-xl-5">
              <div className="reviewArea">
                <h2 className="secTitle">Help Your Business Win!</h2>
                <p className="secDesc">
                  A typical business holds many different assets called capital,
                  including office furniture services equipment, retail display
                  cabinets...
                </p>
                <div className="cusRating">
                  <i className="twi-star"></i>
                  <i className="twi-star"></i>
                  <i className="twi-star"></i>
                  <i className="twi-star"></i>
                  <i className="twi-star"></i>
                </div>
                <p className="customers">
                  <span>99% Customer Satisfaction</span> based on 750+ reviews
                  and 20,000 Objective Resource
                </p>
              </div>
            </div>
            <div className="col-xl-7">
              <div className="appointment_form">
                <p>Do it right now!</p>
                <h3>Make an Appointment</h3>
                <form
                  action="#"
                  method="post"
                  className="row"
                  id="contact_form"
                >
                  <div className="input-field col-md-6">
                    <i className="twi-user2"></i>
                    <input
                      className="required"
                      type="text"
                      name="con_name"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="input-field col-md-6">
                    <i className="twi-envelope2"></i>
                    <input
                      className="required"
                      type="email"
                      name="con_email"
                      placeholder="Email Address"
                    />
                  </div>
                  <div className="input-field col-md-6">
                    <i className="twi-map-marker-alt2"></i>
                    <input
                      type="text"
                      name="con_location"
                      placeholder="Your Location"
                    />
                  </div>
                  <div className="input-field col-md-6">
                    <select className="required" name="con_subject">
                      <option selected="selected">Subjects</option>
                      <option>Finance Consultant</option>
                      <option>Business Consultant</option>
                      <option>Financial Advices</option>
                      <option>Business Growth</option>
                    </select>
                  </div>
                  <div className="input-field col-md-12">
                    <i className="twi-comment-lines2"></i>
                    <textarea
                      className="required"
                      name="con_message"
                      placeholder="Describe Your Plan"
                    ></textarea>
                  </div>
                  <div className="input-field col-md-12">
                    <button type="submit" className="qu_btn">
                      Get A Quote
                    </button>
                    <div className="con_message"></div>
                  </div>
                </form>
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
              <div className="btn btn-sm border rounded-pill text-primary px-3 mb-3">
                Testimonial
              </div>
              <h1 className="mb-4">What Our Clients Say!</h1>
              <p className="mb-4">
                Discover firsthand experiences and testimonials from our valued
                clients. Dive into their stories and learn how our services have
                made a difference in their lives or businesses.
              </p>
              {/* <a className="btn btn-primary rounded-pill px-4" href="#">Read More</a> */}
            </div>
            <div className="col-lg-7 wow fadeIn" data-wow-delay="0.5s">
              <div className="owl-carousel testimonial-carousel border-start border-primary">
                <div className="testimonial-item ps-5">
                  <i className="fa fa-quote-left fa-2x text-primary mb-3"></i>
                  <p className="fs-4">
                    Aliqu diam amet diam et eos labore. Clita erat ipsum et
                    lorem et sit, sed stet no labore lorem sit. Sanctus clita
                    duo justo et tempor eirmod magna dolore erat amet
                  </p>
                  <div className="d-flex align-items-center">
                    {/* <img className="img-fluid flex-shrink-0 rounded-circle" src="img/testimonial-1.jpg"
                                    style="width: 60px; height: 60px;"> */}
                    <div className="ps-3">
                      <h5 className="mb-1">Client Name</h5>
                      <span>Profession</span>
                    </div>
                  </div>
                </div>
                <div className="testimonial-item ps-5">
                  <i className="fa fa-quote-left fa-2x text-primary mb-3"></i>
                  <p className="fs-4">
                    Aliqu diam amet diam et eos labore. Clita erat ipsum et
                    lorem et sit, sed stet no labore lorem sit. Sanctus clita
                    duo justo et tempor eirmod magna dolore erat amet
                  </p>
                  <div className="d-flex align-items-center">
                    {/* <img className="img-fluid flex-shrink-0 rounded-circle" src="img/testimonial-2.jpg"
                                    style="width: 60px; height: 60px;"> */}
                    <div className="ps-3">
                      <h5 className="mb-1">Client Name</h5>
                      <span>Profession</span>
                    </div>
                  </div>
                </div>
                <div className="testimonial-item ps-5">
                  <i className="fa fa-quote-left fa-2x text-primary mb-3"></i>
                  <p className="fs-4">
                    Aliqu diam amet diam et eos labore. Clita erat ipsum et
                    lorem et sit, sed stet no labore lorem sit. Sanctus clita
                    duo justo et tempor eirmod magna dolore erat amet
                  </p>
                  <div className="d-flex align-items-center">
                    {/* <img className="img-fluid flex-shrink-0 rounded-circle" src="img/testimonial-3.jpg"
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
