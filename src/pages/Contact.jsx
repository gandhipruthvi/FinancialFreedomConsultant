import "../Styles/Contact.scss";
import { NavLink } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AppointmentForm from "../components/AppointmentForm";

const Contact = () => {
  return (
    <div className="contactPage">
      <ToastContainer />
      <section className="page_banner">
        <div className="container largeContainer">
          <div className="row">
            <div className="col-md-6">
              <h2 className="banner-title">Contact</h2>
            </div>
            <div className="col-md-6 text-right">
              <p className="breadcrumbs">
                <NavLink to="/" className="anchor">
                  <i className="twi-home-alt1"></i>Home
                </NavLink>
                <span>/</span>Contact
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="infoSection">
        <div className="container largeContainer">
          <div className="row">
            <div className="col-lg-4 col-md-6 info">
              <div className="icon_box_10">
                <div className="ib_box">
                  <i className="icons-location-pin"></i>
                </div>
                <h3>Office Address:</h3>
                <p>
                  3101 Prime Tower, 31st Floor.
                  <br />
                  Business Bay, Dubai UAE
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 info">
              <div className="icon_box_10">
                <div className="ib_box">
                  <i className="icons-telephone"></i>
                </div>
                <h3>Call Us For Help:</h3>
                <p>+971-50-984-1318</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 info">
              <div className="icon_box_10">
                <div className="ib_box">
                  <i className="icons-envelope-1"></i>
                </div>
                <h3>Mail info:</h3>
                <p>info@financialfreedomconsultant.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="appoinmentSection">
        <div className="container largeContainer">
          <div className="row">
            <div className="col-xl-7">
              <div className="appointment_form">
                <p>Get an Quick Information</p>
                <h3>Request An Appointment</h3>
                <AppointmentForm />
                <br />
                <p className="note-section">
                  Note: The displayed time here corresponds to the UAE time
                  zone.
                </p>
              </div>
            </div>
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
                <div className="single_skill" data-parcent="70">
                  <p>Perfect Project Done</p>
                  <div className="ss_parent">
                    <div className="ss_child"></div>
                    {/* <span>70%</span> */}
                  </div>
                </div>
                <div className="single_skill" data-parcent="80">
                  <p>Satisfied Customer</p>
                  <div className="ss_parent">
                    <div className="ss_child"></div>
                    {/* <span>80%</span> */}
                  </div>
                </div>
                <div className="hpAuthor">
                  <div className="signAuthor">
                    FINANCIAL FREEDOM <br /> CONSULTANT
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mapSection">
        <div className="google_map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14441.756758833146!2d55.2715164!3d25.1884074!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69765c83c3fb%3A0x4e4d67ba372696cd!2sBlue%20Matrix%20Business%20Center%20LLC!5e0!3m2!1sen!2sin!4v1713802552751!5m2!1sen!2sin"></iframe>
        </div>
      </section>
    </div>
  );
};

export default Contact;
