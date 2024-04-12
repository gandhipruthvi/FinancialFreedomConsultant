import "../Styles/Home.scss";
import ServicesImg1 from "../assets/our services/s1.jpg";
import ServicesImg2 from "../assets/our services/s2.jpg";
import ServicesImg3 from "../assets/our services/s3.jpg";

function Home() {
  return (
    <div className="Home">
      <section className="banner">
        <div className="banner-content">
          <h1>Bright Solutions, Profitable Results.</h1>
          <p>
            Keeping track of the finances is fundamental to the success of every
            business, small or large, but tackling task yourself can be
            intimidating.
          </p>
          <button className="services-button">Our Services</button>
        </div>
      </section>

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

      <section className="serviceSection">
        <div className="marqueeText runRight stokeText">
          <h2>Financial Freedom Consultant.</h2>
        </div><br />
        <div class="container largeContainer">
          <div class="row">
            <div class="col-xl-6">
              <div class="boxService">
                <h2 class="secTitle">We Make Your Agency <span>Full Bright</span></h2>
                <p>This Cheat Sheet offers tips and advice to help you get the essentials right. here’s a list
                  of the most important tasks of business accounting and their meaning.</p>
              </div>
            </div>
            <div class="col-xl-3 col-md-6">
              <div class="icon_box_01">
                <div class="ibMeta">
                  <span>01</span>
                  <i class="icons-monitoring"></i>
                  <div class="brleft"></div>
                  <div class="brright"></div>
                </div>
                <h3><a href="single-service.html">Market Research</a></h3>
                <p>A typical business holds many different assets called capital, including office...</p>
                {/* <a class="sm" href="single-service.html">Read More<i class="twi-arrow-right1"></i></a> */}
              </div>
            </div>
            <div class="col-xl-3 col-md-6">
              <div class="icon_box_01">
                <div class="ibMeta">
                  <span>02</span>
                  <i class="icon-local_3-1"></i>
                  <div class="brleft"></div>
                  <div class="brright"></div>
                </div>
                <h3><a href="single-service.html">Startup Business</a></h3>
                <p>A typical business holds many different assets called capital, including office...</p>
                {/* <a class="sm" href="single-service.html">Read More<i class="twi-arrow-right1"></i></a> */}
              </div>
            </div>
            <div class="col-xl-3 col-md-6">
              <div class="icon_box_01">
                <div class="ibMeta">
                  <span>03</span>
                  <i class="icon-local_1"></i>
                  <div class="brleft"></div>
                  <div class="brright"></div>
                </div>
                <h3><a href="single-service.html">Business Growth</a></h3>
                <p>A typical business holds many different assets called capital, including office...</p>
                {/* <a class="sm" href="single-service.html">Read More<i class="twi-arrow-right1"></i></a> */}
              </div>
            </div>
            <div class="col-xl-3 col-md-6">
              <div class="icon_box_01">
                <div class="ibMeta">
                  <span>04</span>
                  <i class="icon-local_11"></i>
                  <div class="brleft"></div>
                  <div class="brright"></div>
                </div>
                <h3><a href="single-service.html">Insurance Task</a></h3>
                <p>A typical business holds many different assets called capital, including office...</p>
                {/* <a class="sm" href="single-service.html">Read More<i class="twi-arrow-right1"></i></a> */}
              </div>
            </div>
            <div class="col-xl-3 col-md-6">
              <div class="icon_box_01">
                <div class="ibMeta">
                  <span>05</span>
                  <i class="icon-Wemseu01"></i>
                  <div class="brleft"></div>
                  <div class="brright"></div>
                </div>
                <h3><a href="single-service.html">Consultancy</a></h3>
                <p>A typical business holds many different assets called capital, including office...</p>
                {/* <a class="sm" href="single-service.html">Read More<i class="twi-arrow-right1"></i></a> */}
              </div>
            </div>
            <div class="col-xl-3 col-md-6">
              <div class="icon_box_01">
                <div class="ibMeta">
                  <span>06</span>
                  <i class="icon-local_1-1"></i>
                  <div class="brleft"></div>
                  <div class="brright"></div>
                </div>
                <h3><a href="single-service.html">Financial Advices</a></h3>
                <p>A typical business holds many different assets called capital, including office...</p>
                {/* <a class="sm" href="single-service.html">Read More<i class="twi-arrow-right1"></i></a> */}
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12 text-center">
              <p class="qu_link">You can also find our <a href="contact.html">Consultant Service to contact for
                the consulting</a></p>
            </div>
          </div>
        </div>
        {/* <div className="container largeContainer">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="subTitle">
                <span className="bleft"></span>Our Services
                <span className="bright"></span>
              </div>
              <h2 className="secTitle">Customers Services</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="icon_box_09 text-center">
                <h2>01</h2>
                <div className="ib_box">
                  <i className="icon-local_1"></i>
                </div>
                <div className="srThumb">
                  <img src={ServicesImg1} alt="Service Image 1" />
                </div>
                <h3>
                  <a href="single-service.html">Startup</a>
                </h3>
                <p>A typical business holds many different assets called</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="icon_box_09 text-center">
                <h2>02</h2>
                <div className="ib_box">
                  <i className="icon-local_3-1"></i>
                </div>
                <div className="srThumb">
                  <img src={ServicesImg2} alt="Service Image 2" />
                </div>
                <h3>
                  <a href="single-service.html">Business</a>
                </h3>
                <p>A typical business holds many different assets called</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="icon_box_09 text-center">
                <h2>03</h2>
                <div className="ib_box">
                  <i className="icon-local_1-1"></i>
                </div>
                <div className="srThumb">
                  <img src={ServicesImg3} alt="Service Image 3" />
                </div>
                <h3>
                  <a href="single-service.html">Financial</a>
                </h3>
                <p>A typical business holds many different assets called</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-center">
              <p className="secDesc">
                We help take your small business to the next level. Don’t
                hesitate to contact us.
              </p>
              <h4>30 Minutes Free Consultation</h4>
              <div className="clearfix"></div>
              <a className="qu_btn" href="contact.html">
                Send Request
              </a>
            </div>
          </div>
        </div> */}
        <div className="marqueeText btMr runLeft">
          <h2>Financial Freedom Consultant.</h2>
        </div>
      </section>
    </div>
  );
}

export default Home;
