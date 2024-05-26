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
      <div className="containnoer largeContainer topsection">
        <div className="row">
          <div className="col-lg-7 col-md-6">
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
        <div className="row">
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
              <h3 className="widget_title mb28">Services</h3>
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
              <h3 className="widget_title mb28">Post Gallery</h3>
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
        <p>© 2013-2023 Financial Freedom Consultant. All rights reserved.</p>

        <ul className="ft-social-links">
          <li>
            <a
              href="https://linkedin.com/in/Alkaison/"
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
              href="https://facebook.com/"
              title="FaceBook"
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
              href="https://x.com/Alkaison/"
              title="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 512 512"
              >
                <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
