import "../Styles/Contact.scss";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Form from "react-bootstrap/Form";
import countries from "../assets/countries.json";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import getDay from "date-fns/getDay";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [checkDate, setCheckDate] = useState(null);
  const SelectDate = () => {
    const isWeekday = (date) => {
      const day = getDay(date);
      return day !== 0 && day !== 6;
    };
    return (
      <DatePicker
        selected={selectedDate}
        className={checkDate ? "dateTimeInvalid" : ""}
        onChange={(date) => {
          setSelectedDate(date);
          date == null ? setCheckDate(true) : setCheckDate(false);
        }}
        showTimeSelect
        filterDate={isWeekday}
        minDate={new Date()}
        timeFormat="HH:mm"
        timeIntervals={15}
        timeCaption="Time"
        minTime={setHours(setMinutes(new Date(), 59), 8)}
        maxTime={setHours(setMinutes(new Date(), 0), 17)}
        dateFormat="MMMM d, yyyy h:mm aa"
        placeholderText="Select Date & Time"
        name="date_time"
      />
    );
  };

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false || selectedDate == null) {
      event.preventDefault();
      event.stopPropagation();
      setValidated(true);
    } else {
      event.preventDefault();
      emailjs
        .sendForm("service_aphuyl9", "template_nkiyiiy", form, {
          publicKey: "fpCqaLGlOJgGZkKkq",
        })
        .then(
          () => {
            console.log("SUCCESS!");
            form.reset();
            setValidated(false);
            toast.success("Form successfully submitted", {
              position: "bottom-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          },
          (error) => {
            console.log("FAILED...", error.text);
            toast.error("Unable to submit the form", {
              position: "bottom-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          }
        );
    }
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
                <Form
                  className="row"
                  onSubmit={handleSubmit}
                  noValidate
                  validated={validated}
                >
                  <Form.Group className="input-field col-md-6">
                    <i className="twi-user2"></i>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Enter Your Name"
                      name="client_name"
                    />
                    <Form.Control.Feedback type="invalid">
                      Please enter a valid Name
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="input-field col-md-6">
                    <i className="twi-envelope2"></i>
                    <Form.Control
                      required
                      type="email"
                      placeholder="Enter Email"
                      name="client_email"
                    />
                    <Form.Control.Feedback type="invalid">
                      Please enter a valid Email
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="input-field col-md-12">
                    <i className="twi-cog"></i>
                    <Form.Select required name="service">
                      <option value="">Choose services</option>
                      <option value="Wealth path advisory">
                        Wealth path advisory
                      </option>
                      <option value="Portfolio Management">
                        Portfolio Management
                      </option>
                      <option value="Fin Market Academy">
                        Fin Market Academy
                      </option>
                      <option value="Financial Advisory">
                        Financial Advisory
                      </option>
                      <option value="Career Counseling">
                        Career Counseling
                      </option>
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                      Please select a Service
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="input-field  col-md-12">
                    <i className="twi-calendar2 dateTime"></i>
                    <SelectDate></SelectDate>
                    <Form.Control.Feedback
                      type="invalid"
                      className={checkDate ? "active" : ""}
                    >
                      Please select a Date and Time
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="input-field col-md-6">
                    <i className="icons-worldwide"></i>
                    <Form.Select required name="country">
                      <option value="">Choose country</option>
                      {countriesOption}
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                      Please select a Country
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="input-field col-md-6">
                    <i className="icons-telephone"></i>
                    <Form.Control
                      required
                      type="number"
                      placeholder="Contact Number"
                      min="100000000"
                      max="9999999999"
                      name="contact_number"
                    />
                    <Form.Control.Feedback type="invalid">
                      Please enter a Contact Number
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="input-field col-md-12">
                    <i className="twi-comment-lines2"></i>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      placeholder="Describe Your Info"
                      name="info"
                    />
                  </Form.Group>

                  <div className="input-field col-md-12">
                    <button type="submit" className="qu_btn">
                      Get A Quote
                    </button>
                  </div>
                </Form>
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
