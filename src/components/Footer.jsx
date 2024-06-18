import "../Styles/Footer.scss";
import t1 from "../assets/footer/t1.jpg";
import t2 from "../assets/footer/t2.jpg";
import g1 from "../assets/footer/g1.jpg";
import g2 from "../assets/footer/g2.jpg";
import g3 from "../assets/footer/g3.jpg";
import g4 from "../assets/footer/g4.jpg";
import g5 from "../assets/footer/g5.jpg";
import g6 from "../assets/footer/g6.jpg";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="container largeContainer topsection">
        <div className="row emailSection">
          <div className="col-lg-7 col-md-6 ">
            <h2 className="secTitle">
              Feel free to reach out with any questions!
              <br /> You can give us a call, visit our office,
              <br />
              <span>or simply drop us an email.</span>
            </h2>
          </div>
          <div className="col-lg-5 col-md-6">
            <div className="SubsrcribeForm">
              <form className="yikes-easy-mc-form" action="#" method="post">
                <input type="email" name="EMAIL" placeholder="Email Address" />
                <button className="yikes-easy-mc-submit-button" type="submit">
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div className="fdivider"></div>
          </div>
        </div>

        <div className="row footerSection">
          <div className="col-md-6 col-lg-3">
            <div className="aboutWidget">
              <h5>Do you have questions? Call or visit us.</h5>
              <div className="phone">
                <i className="twi-phone"></i>+971-50-984-1318
              </div>
              <p>3101 Prime Tower, 31st Floor. Business Bay, Dubai UAE</p>
              <a href="mailto:info@financialfreedomconsultant.com">
                <span>info@financialfreedomconsultant.com</span>
              </a>
            </div>
          </div>
          <div className="col-md-6 col-lg-2">
            <div className="widget PL28">
              <h3 className="widget_title">Useful Links</h3>
              <ul className="menu">
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/about">About</NavLink>
                </li>
                <li>
                  <NavLink to="/services">Services</NavLink>
                </li>
                <li>
                  <NavLink to="/courses">Courses</NavLink>
                </li>
                <li>
                  <a>Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="widget PL28">
              <h3 className="widget_title">Services</h3>
              <div className="pp_post_item">
                <img src={t1} alt="blog first image" />
                <span>
                  <i className="twi-hand-point-right2"></i>Career Counselling
                </span>
                <a>Personalized career guidance for you.</a>
              </div>
              <div className="pp_post_item">
                <img src={t2} alt="blog second image" />
                <span>
                  <i className="twi-hand-point-right2"></i>Portfolio Management
                </span>
                <a>Maximize returns, manage risk effectively.</a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="widget gallery">
              <h3 className="widget_title">Post Gallery</h3>
              <div className="galleryShots">
                <a className="popup_img">
                  <img src={g1} alt="gallery image" />
                </a>
                <a className="popup_img">
                  <img src={g2} alt="gallery image" />
                </a>
                <a className="popup_img">
                  <img src={g3} alt="gallery image" />
                </a>
                <a className="popup_img">
                  <img src={g4} alt="gallery image" />
                </a>
                <a className="popup_img">
                  <img src={g5} alt="gallery image" />
                </a>
                <a className="popup_img">
                  <img src={g6} alt="gallery image" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="ft-copyright">
        <p>© 2013-2024 Financial Freedom Consultant. All rights reserved.</p>

        <ul className="ft-social-links">
          <li>
            <a
              href="https://www.linkedin.com/company/financial-freedom-consultant/"
              title="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 448 512"
              >
                <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
              </svg>
            </a>
          </li>

          <li>
            <a
              href="https://www.facebook.com/financialfreedomconsultant1"
              title="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 320 512"
              >
                <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
              </svg>
            </a>
          </li>

          <li>
            <a
              href="https://twitter.com/FinancialFC1"
              title="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 512 512"
              >
                <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
              </svg>
            </a>
          </li>

          <li>
            <a
              href="https://www.instagram.com/financialfreedomconsultantllc?igsh=MThwbTJ5ZGUwM3dxeA%3D%3D&utm_source=qr"
              title="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                id="instagram"
              >
                <path
                  d="M5.41421,1.17157c1.17157,1.17157 1.17157,3.07107 0,4.24264c-1.17157,1.17157 -3.07107,1.17157 -4.24264,0c-1.17157,-1.17157 -1.17157,-3.07107 -8.88178e-16,-4.24264c1.17157,-1.17157 3.07107,-1.17157 4.24264,-8.88178e-16"
                  transform="translate(4.707 4.707)"
                ></path>
                <path d="M11.5,0h-7c-2.48145,0 -4.5,2.01855 -4.5,4.5v7c0,2.48145 2.01855,4.5 4.5,4.5h7c2.48145,0 4.5,-2.01855 4.5,-4.5v-7c0,-2.48145 -2.01855,-4.5 -4.5,-4.5Zm-3.5,12c-2.20557,0 -4,-1.79395 -4,-4c0,-2.20605 1.79443,-4 4,-4c2.20557,0 4,1.79395 4,4c0,2.20605 -1.79443,4 -4,4Zm4.5,-8c-0.276123,0 -0.5,-0.223877 -0.5,-0.5c0,-0.276184 0.223877,-0.5 0.5,-0.5c0.276123,0 0.5,0.223816 0.5,0.5c0,0.276123 -0.223877,0.5 -0.5,0.5Z"></path>
              </svg>
            </a>
          </li>

          <li>
            <a
              href="https://www.tiktok.com/@financial.freedom82?_t=8mfLa62Snx4&_r=1"
              title="Tik tok"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 512 512"
              >
                <path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z" />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
