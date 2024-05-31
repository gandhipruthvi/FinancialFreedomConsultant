import Form from "react-bootstrap/Form";
import "../Styles/AppointmentForm.scss";
import { ToastContainer, toast } from "react-toastify";
import countries from "../assets/countries.json";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import getDay from "date-fns/getDay";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "react-bootstrap/Spinner";

const AppointmentForm = () => {
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
      setTimeout(() => {
        setIsDataLoading(false);
      }, 2000);
      // emailjs
      //   .sendForm("service_rvhrg7l", "template_owud8ht", form, {
      //     publicKey: "VGj51Rzpbj7-sbbxg",
      //   })
      //   .then(
      //     () => {
      //       <ToastContainer />;
      //       console.log("SUCCESS!");
      //       form.reset();
      //       setValidated(false);
      //       toast.success("Form successfully submitted", {
      //         position: "bottom-right",
      //         autoClose: 5000,
      //         hideProgressBar: false,
      //         closeOnClick: true,
      //         pauseOnHover: true,
      //         draggable: true,
      //         progress: undefined,
      //         theme: "light",
      //       });
      //     },
      //     (error) => {
      //       console.log("FAILED...", error.text);
      //       toast.error("Unable to submit the form", {
      //         position: "bottom-right",
      //         autoClose: 5000,
      //         hideProgressBar: false,
      //         closeOnClick: true,
      //         pauseOnHover: true,
      //         draggable: true,
      //         progress: undefined,
      //         theme: "light",
      //       });
      //     }
      //   );
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
    <div>
      {/* <ToastContainer /> */}
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
            <option value="Wealth path advisory">Wealth path advisory</option>
            <option value="Portfolio Management">Portfolio Management</option>
            <option value="Fin Market Academy">Fin Market Academy</option>
            <option value="Financial Advisory">Financial Advisory</option>
            <option value="Career Counseling">Career Counseling</option>
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
    </div>
  );
};

export default AppointmentForm;