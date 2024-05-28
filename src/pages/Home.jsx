import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../Styles/Home.scss";
import Quote from "../assets/bg/blockquote.svg";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { reviews } from "../components/reviewsData";
import countries from "../assets/countries.json";

// import ServicesImg1 from "../assets/our services/s1.jpg";
// import ServicesImg2 from "../assets/our services/s2.jpg";
// import ServicesImg3 from "../assets/our services/s3.jpg";

const Home = () => {
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

  const SelectDate = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        dateFormat="dd/MM/yyyy"
      />
    );
  };

  const SelectTime = () => {
    const [date, handleDateChange] = useState(new Date());
    return (
      <DatePicker
        selected={date}
        onChange={handleDateChange}
        showTimeSelect
        showTimeSelectOnly
        dateFormat="h:mm aa"
        timeCaption="Time"
      />
    );
  };

  let countriesOption =
    countries.length > 0 &&
    countries.map((country) => {
      return (
        <option value={country.name} key={country.name}>
          {country.name}
        </option>
      );
    });

  return (
    <div className="Home">
      {/* Banner Carousel */}
      <section className="banner">
        <div className="banner-content">
          <h1 className="headLine">
            Bright Solutions,
            <br /> Profitable Results.
          </h1>
          <p>
            Unlock your path to financial freedom with our expert consulting
            services. We tailor strategies that drive profitable results,
            empowering you to achieve and sustain financial independence. Let us
            guide you toward a brighter financial future.
          </p>
          <a href="services" className="qu_btn">
            Our Services
          </a>
        </div>
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
          <a href="contact" className=" priceItem qu_btn">
            Book Now
          </a>
        </div>
      </section>

      {/* Free Consultation Call */}
      <div className="row bottomspace">
        <div className="col-md-12 text-center">
          <p className="secDesc">
            Book a free consultation call for your financial freedom! Let’s
            evaluate your financial health.
          </p>
          <h4>30 Minutes Free Consultation</h4>
          <div className="clearfix"></div>
          <a className="qu_btn" href="contact">
            Send Request
          </a>
        </div>
      </div>

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
                <div className="subTitle">
                  <span className="bleft"></span>Our Services
                  <span className="bright"></span>
                </div>
                <h2 className="secTitle">
                  Customer <span>Services</span>
                </h2>
                <p>
                  Explore a diverse array of meticulously crafted solutions,
                  each tailored to address your unique financial needs and
                  aspirations with expertise and care. Trust us to be your
                  partner in financial success.
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
                  <a>Market Research</a>
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
                  <a>Startup Business</a>
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
                  <a>Business Growth</a>
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
                  <a>Insurance Task</a>
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
                  <a>Consultancy</a>
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
                  <a>Financial Advices</a>
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
                <CountUpAnimation>15</CountUpAnimation>
              </span>
              <i>k</i>
            </h2>
            <p>
              Happy Clients
              {/* <br /> */}
              {/* we like best principle */}
            </p>
          </div>
          <div className="fact_01">
            <h2>
              <span className="counter" data-count="138">
                <CountUpAnimation>130</CountUpAnimation>
              </span>
              <i>+</i>
            </h2>
            <p>
              Satisfied Customers
              {/* <br />
              some of good advantages */}
            </p>
          </div>
          <div className="fact_01">
            <h2>
              <span className="counter" data-count="9800">
                <CountUpAnimation>90</CountUpAnimation>
              </span>
              <i>%</i>
            </h2>
            <p>
              Accurate Growth
              {/* <br />
              expound actual teaching */}
            </p>
          </div>
          <div className="fact_01">
            <h2>
              <span className="counter" data-count="2500">
                <CountUpAnimation>24</CountUpAnimation>
              </span>
              <i>/7</i>
            </h2>
            <p>
              Customer Care
              {/* <br /> */}
              {/* we like best principle */}
            </p>
          </div>
          <div className="fact_01">
            <h2>
              <span className="counter" data-count="2500">
                <CountUpAnimation>3</CountUpAnimation>
              </span>
              <i>k</i>
            </h2>
            <p>
              Certified Courses
              {/* <br /> */}
              {/* we like best principle */}
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
              <h2 className="secTitle white">
                Your Financial Future, Our Commitment
              </h2>
              <p className="secDesc">
                We're committed to empowering you towards financial
                independence, securing your wealth, and partnering with you
                every step of the way. With us, you'll build a stronger
                financial foundation, ensuring a brighter tomorrow.
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
                      <h3>Individual / Growing Business!</h3>
                      <p>
                        Discover how we empower individuals & small businesses
                        to thrive in competitive markets.
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
                <h2 className="secTitle">Boost your financial wellness.</h2>
                <p className="secDesc">
                  Receive support at every step of your financial path, whether
                  it involves time management, skill development, or investment
                  exploration, under the guidance of a financial freedom
                  consultant.
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
                  <div className="input-field col-md-12">
                    <i className="twi-cog"></i>
                    <select className="required" name="con_subject">
                      <option selected="selected">Choose services</option>
                      <option>Wealth path advisory</option>
                      <option>Portfolio Management </option>
                      <option>Fin Market Academy </option>
                      <option>Financial Advisory </option>
                      <option>Career Counseling</option>
                    </select>
                  </div>
                  <div className="input-field col-lg-6">
                    <i className="twi-calendar2"></i>
                    <SelectDate></SelectDate>
                    {/* <input
                      className="required date-picker"
                      type="text"
                      name="con_date"
                      placeholder="Date of Visit"
                    /> */}
                  </div>
                  <div className="input-field col-lg-6">
                    <i className="twi-clock2"></i>
                    <SelectTime></SelectTime>
                    {/* <input
                      className="required time-picker"
                      type="text"
                      name="con_time"
                      placeholder="Time of Visit"
                    /> */}
                  </div>
                  <div className="input-field col-md-6">
                    <i className="icons-worldwide"></i>
                    <select className="required" defaultValue="default">
                      <option value="default">Choose country</option>
                      {countriesOption}
                    </select>
                  </div>
                  <div className="input-field col-md-6">
                    <i className="icons-telephone"></i>
                    <input
                      className="required"
                      type="text"
                      name="con_name"
                      placeholder="Contact Number"
                    />
                  </div>
                  <div className="input-field col-md-12">
                    <i className="twi-comment-lines2"></i>
                    <textarea
                      className="required"
                      name="con_message"
                      placeholder="Describe Your Info"
                    ></textarea>
                  </div>
                  <div className="input-field col-md-12">
                    <button type="submit" className="qu_btn">
                      Get A Quote
                    </button>
                    <div className="con_message"></div>
                  </div>
                </form>
                <br />
                <p className="note-section">
                  Note: The displayed time here corresponds to the UAE time
                  zone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section class="testimonialSection01">
        <div class="container largeContainer">
          <div class="row">
            <div class="col-lg-12 text-center">
              <div class="subTitle">
                <span class="bleft"></span>Testimonial
                <span class="bright"></span>
              </div>
              <h2 class="secTitle">
                Client’s <span>Feedback</span>
              </h2>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <section className="testimonial-container">
                <div className="slider-container">
                  <blockquote>
                    <img src={Quote} className="top-quote" />
                    <img src={Quote} className="bottom-quote" />
                  </blockquote>
                  <Splide
                    options={{
                      perPage: 1,
                      autoplay: true,
                      speed: 1000,
                      rewind: true,
                      rewindByDrag: true,
                    }}
                  >
                    {reviews.map((review) => (
                      <SplideSlide key={review.id}>
                        <img className="review-img" src={review.image} alt="" />
                        <div className="content">
                          <p className="text">{review.text}</p>
                          <div className="info">
                            <div className="rating">
                              <span className="star">&#9733;</span>
                              <span className="star">&#9733;</span>
                              <span className="star">&#9733;</span>
                              <span className="star">&#9733;</span>
                              <span className="star">&#9734;</span>
                            </div>
                            <p className="user">{review.name}</p>
                          </div>
                        </div>
                      </SplideSlide>
                    ))}
                  </Splide>
                </div>
              </section>
              {/* <div class="testimonialslider01">
                <div class="testiItem01">
                  <img src={Quote} alt />
                  <p class="quotation">
                    Grow tactical "outside the box" thinking whereas principle entered internal or "organic"
                    sources. roductize tailers before
                  </p>
                  <div class="ts_author">
                    <img src="assets/images/home1/t1.jpg" alt />
                    <h5>David Smith</h5>
                    <span>CEO & Founder</span>
                  </div>
                </div>
                <div class="testiItem01">
                  <img src={Quote} alt />
                  <p class="quotation">
                    Grow tactical "outside the box" thinking whereas principle entered internal or "organic"
                    sources. roductize tailers before
                  </p>
                  <div class="ts_author">
                    <img src="assets/images/home1/t2.jpg" alt />
                    <h5>Jasmine Dola</h5>
                    <span>Founder</span>
                  </div>
                </div>
                <div class="testiItem01">
                  <img src={Quote} alt />
                  <p class="quotation">
                    Grow tactical "outside the box" thinking whereas principle entered internal or "organic"
                    sources. roductize tailers before
                  </p>
                  <div class="ts_author">
                    <img src="assets/images/home1/t3.jpg" alt />
                    <h5>Sowat Ahsan</h5>
                    <span>Designer</span>
                  </div>
                </div>
                <div class="testiItem01">
                  <img src={Quote} alt />
                  <p class="quotation">
                    Grow tactical "outside the box" thinking whereas principle entered internal or "organic"
                    sources. roductize tailers before
                  </p>
                  <div class="ts_author">
                    <img src="assets/images/home1/t1.jpg" alt />
                    <h5>Mark Smith</h5>
                    <span>Co Founder</span>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
