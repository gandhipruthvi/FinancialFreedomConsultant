import "../Styles/Contact.scss";
import { NavLink } from "react-router-dom";
import AuthorImg from "../assets/contact/author.png";
import SignImg from "../assets/contact/sign.png";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const SelectDate = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      dateFormat='dd/MM/yyyy'
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

function Contact() {
  return (
    <div className="contact">
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

      <section className="coniconboxPage">
        <div className="container largeContainer">
          <div className="row">
            <div className="col-lg-4 col-md-6">
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
            <div className="col-lg-4 col-md-6">
              <div className="icon_box_10">
                <div className="ib_box">
                  <i className="icons-telephone"></i>
                </div>
                <h3>Call Us For Help:</h3>
                <p>+971-50-984-1318</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
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
                    <i className="icons-telephone"></i>
                    <input
                      className="required"
                      type="text"
                      name="con_name"
                      placeholder="Contact Number"
                    />
                  </div>
                  <div className="input-field col-md-6">
                    <i className="icons-worldwide"></i>
                    <select className="required" name="con_subject">
                      <option selected="selected">Choose country</option>
                      <option>Argentina</option>
                      <option>Belgium</option>
                      <option>Canada</option>
                      <option>India</option>
                      <option>Japan</option>
                      <option>Morocco</option>
                    </select>
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
                </form><br />
                <p className="note-section">Note: The displayed time here corresponds to the UAE time zone.</p>
              </div>
            </div>
            <div className="col-xl-5">
              <div className="reviewArea">
                <h2 className="secTitle">Boost your financial wellness.</h2>
                <p className="secDesc">
                  Receive support at every step of your financial path, whether it involves time management,
                  skill development, or investment exploration, under the guidance of a financial freedom consultant.
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
                {/* <div className="hpAuthor">
                  <img className="author" src={AuthorImg} alt="author image" />
                  <img
                    className="signature"
                    src={SignImg}
                    alt="signature image"
                  />
                  <div className="signAuthor">
                    Amjad Hussain - <span>Founder</span>
                  </div>
                </div> */}
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
}

export default Contact;
